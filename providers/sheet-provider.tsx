"use client";

import { useMountedState } from "react-use";

import { NewAssetsconstraintSheet } from "@/features/assetsconstraints/components/new-assetsconstraint-sheet";
import { EditAssetsconstraintSheet } from "@/features/assetsconstraints/components/edit-assetsconstraint-sheet";
export const SheetProvider = () => {
  const isMounted = useMountedState();

  if (!isMounted) return null;

  return (
    <>

      <NewAssetsconstraintSheet />
      <EditAssetsconstraintSheet />

    </>
  );
};
