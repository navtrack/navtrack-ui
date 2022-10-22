import { useCurrentAsset } from "@navtrack/ui-shared/newHooks/assets/useCurrentAsset";
import { useAddUserToAssetMutation } from "@navtrack/ui-shared/hooks/mutations/useAddUserToAssetMutation";
import { useAssetUsersQuery } from "@navtrack/ui-shared/hooks/queries/useAssetUsersQuery";
import { mapErrors } from "@navtrack/ui-shared/utils/formik";
import { FormikHelpers } from "formik";
import { useCallback } from "react";
import { useIntl } from "react-intl";
import { object, SchemaOf, string } from "yup";
import { AddUserToAssetFormValues } from "./types";

interface IUseAddUserToAsset {
  close: () => void;
}

export default function useAddUserToAsset(props: IUseAddUserToAsset) {
  const intl = useIntl();
  const mutation = useAddUserToAssetMutation();
  const currentAsset = useCurrentAsset();
  const assetUsers = useAssetUsersQuery({
    assetId: !!currentAsset ? currentAsset.id : ""
  });

  const validationSchema: SchemaOf<AddUserToAssetFormValues> = object({
    email: string()
      .email(intl.formatMessage({ id: "generic.email.valid" }))
      .required(intl.formatMessage({ id: "generic.email.required" }))
      .defined(),
    role: string()
      .required(intl.formatMessage({ id: "generic.password.required" }))
      .defined()
  }).defined();

  const handleSubmit = useCallback(
    (
      values: AddUserToAssetFormValues,
      formikHelpers: FormikHelpers<AddUserToAssetFormValues>
    ) => {
      if (currentAsset) {
        mutation.mutate(
          {
            assetId: currentAsset.id,
            data: {
              email: values.email,
              role: values.role
            }
          },
          {
            onSuccess: () => {
              assetUsers.refetch();
              props.close();
            },
            onError: (error) => mapErrors(error, formikHelpers)
          }
        );
      }
    },
    [assetUsers, currentAsset, mutation, props]
  );

  return { validationSchema, handleSubmit, loading: mutation.isLoading };
}
