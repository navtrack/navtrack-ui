/**
 * Generated by orval v6.5.3 🍺
 * Do not edit manually.
 * Navtrack.Api
 * OpenAPI spec version: 1.0
 */
import type { TripModel } from './tripModel';

export interface TripListModel {
  items: TripModel[];
  readonly totalDistance: number;
  readonly totalDuration: number;
  readonly totalLocations: number;
  readonly totalAvgSpeed: number;
  readonly totalAvgAltitude: number;
}
