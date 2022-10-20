import React from "react";
import { IntlProvider } from "react-intl";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot, useRecoilState } from "recoil";
import { AuthenticationProvider } from "./src/components/app/AuthenticationProvider";
import { ConfigProvider } from "./src/components/app/ConfigProvider";
import { SettingsProvider } from "./src/components/app/SettingsProvider";
import { Navigation } from "./src/components/navigation/Navigation";
import translations from "./src/translations";

const queryClient = new QueryClient();

export default function App() {
  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ConfigProvider>
            <SettingsProvider>
              <AuthenticationProvider>
                <IntlProvider locale="en" messages={translations["en"]}>
                  <Navigation />
                </IntlProvider>
              </AuthenticationProvider>
            </SettingsProvider>
          </ConfigProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </SafeAreaProvider>
  );
}
