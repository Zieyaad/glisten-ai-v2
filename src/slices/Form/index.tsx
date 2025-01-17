"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { HubspotProvider } from "next-hubspot";
import HubspotForm from "@/slices/Form/HubspotForm";

/**
 * Props for `Form`.
 */
export type FormProps = SliceComponentProps<Content.FormSlice>;
/**
 * Component for "Form" Slices.
 */
const Form = ({ slice }: FormProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for form (variation: {slice.variation}) Slices
      <HubspotProvider>
        <HubspotForm slice={slice} />
      </HubspotProvider>
    </section>
  );
};
export default Form;
