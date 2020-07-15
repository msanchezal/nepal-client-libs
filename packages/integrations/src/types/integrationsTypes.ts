import { AlChangeStamp, AlDynamicFormControlElement } from '@al/core';

/**
 * Reexport AIMS constructs that are defined in @al/core for convenience.
 */
export { AIMSAccount, AIMSAuthentication, AIMSSessionDescriptor, AIMSUser, AlChangeStamp } from '@al/core';

export interface AlIntegrationType {
    name: string;
    display_name: string;
    description: string;
    category: string;
    icon: string;
}

export interface AlIntegrationTypeDetail extends AlIntegrationType{
    schema?: Object;
    dry_run_message?: string;
    form: {
        controls: AlDynamicFormControlElement[];
    };
    payload_templates?: {
        [key: string]: {default : string };
    };
}

export interface AlIntegrationPayloadSchema {
    payload_conversion_type?: 'default' | 'jq';
    payload_template?: string;
    payload_type?: 'incident' | 'observation' | 'scheduled_report';
}

export interface AlIntegrationBaseSchema {
    id?: string;
    description?: string;
    created?: AlChangeStamp;
    modified?: AlChangeStamp;
    name: string;
    type: string;
}

export interface AlIntegrationConnection extends AlIntegrationBaseSchema, AlIntegrationPayloadSchema {
    target_url?: string;
    auth_header?: string;
    headers?: string;
    email?: string;
    [key: string]: string | AlChangeStamp;
}
