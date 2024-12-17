"use client";
import React from "react";
import { Content } from "@prismicio/client";
import { useHubspotForm } from "next-hubspot";

const formId = "e34f257a-7853-4dfb-abee-0fe9ada7b192";
const portalId = "2659996";

const HubspotForm = ({ slice }: { slice: Content.FormSlice }) => {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: portalId,
    formId: formId,
    target: "#hubspot-form",
  });

  return <div id="hubspot-form" />;
};

export default HubspotForm;
