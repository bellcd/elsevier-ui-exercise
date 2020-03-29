// sample patient ids from https://github.com/cerner/code-learning-lab/wiki/FHIR-Core-Concepts
export const PATIENTS = [
  { name: 'Smart, Valerie', id: 4596007 },
  { name: 'Smart, Wilma', id: 4342008 },
  { name: 'Smart, Nancy', id: 4342009 },
  { name: 'Smart, Joe', id: 4342010 },
  { name: 'Smart, Hailey', id: 4342011 },
  { name: 'Smart, Timmy', id: 4342012 },
  { name: 'Smart, Fred', id: 4478007 },
  { name: 'Peters, Tim', id: 1316024 },
];

export const PATIENT_DEMOGRAPHICS = {
  resourceType: 'Patient',
  id: '4596007',
  meta: {
    versionId: '9',
    lastUpdated: '2020-01-31T22:02:59.000Z'
  },
  text: {
    status: 'generated',
    div: '<div><p><b>Patient</b></p><p><b>Name</b>: Smart, Valerie S</p><p><b>DOB</b>: Apr 15, 1984</p><p><b>Administrative Gender</b>: Female</p><p><b>Marital Status</b>: Single</p><p><b>Status</b>: Active</p></div>'
  },
  extension: [
    {
      url: 'http://fhir.org/guides/argonaut/StructureDefinition/argo-race',
      extension: [
        {
          url: 'ombCategory',
          valueCoding: {
            system: 'http://hl7.org/fhir/v3/Race',
            code: '2106-3',
            display: 'White',
            userSelected: false
          }
        },
        {
          url: 'detailed',
          valueCoding: {
            system: 'http://hl7.org/fhir/v3/Race',
            code: '2106-3',
            userSelected: false
          }
        },
        {
          url: 'text',
          valueString: 'White'
        }
      ]
    }
  ],
  identifier: [
    {
      use: 'usual',
      type: {
        coding: [
          {
            system: 'http://hl7.org/fhir/v2/0203',
            code: 'MR',
            display: 'Medical record number',
            userSelected: false
          }
        ],
        text: 'MRN'
      },
      system: 'urn:oid:1.1.1.1.1.1',
      value: '10002796',
      _value: {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/rendered-value',
            valueString: '10002796'
          }
        ]
      },
      period: {
        start: '2016-11-07T18:57:00.000Z'
      }
    },
    {
      use: 'usual',
      type: {
        coding: [
          {
            system: 'http://hl7.org/fhir/v2/0203',
            code: 'AN',
            display: 'Account number',
            userSelected: false
          }
        ],
        text: 'Federated Person Principal'
      },
      system: 'urn:oid:2.16.840.1.113883.3.13.6',
      value: 'URN:CERNER:IDENTITY-FEDERATION:REALM:687F29DD-69DD-4DE5-ACB1-FD8A2241EF3A:PRINCIPAL:3T2EY39E7YX',
      _value: {
        extension: [
          {
            url: 'http://hl7.org/fhir/StructureDefinition/rendered-value',
            valueString: 'URN:CERNER:IDENTITY-FEDERATION:REALM:687F29DD-69DD-4DE5-ACB1-FD8A2241EF3A:PRINCIPAL:3T2EY39E7YX'
          }
        ]
      },
      period: {
        start: '2016-01-01T10:00:00.000Z'
      }
    }
  ],
  active: true,
  name: [
    {
      use: 'official',
      text: 'Smart, Valerie S',
      family: [
        'Smart'
      ],
      given: [
        'Valerie',
        'S'
      ],
      period: {
        start: '2016-11-07T18:57:09.000Z'
      }
    },
    {
      use: 'maiden',
      text: 'Smith,',
      family: [
        'Smith'
      ],
      period: {
        start: '2016-11-07T18:57:00.000Z'
      }
    }
  ],
  gender: 'female',
  birthDate: '1984-04-15',
  maritalStatus: {
    coding: [
      {
        system: 'http://hl7.org/fhir/marital-status',
        code: 'U',
        display: 'Unmarried',
        userSelected: false
      }
    ],
    text: 'Single'
  }
}

export const PATIENT_CONDITIONS = {
  resourceType: 'Bundle',
  id: '95468664-0e51-4231-9503-71f198596c86',
  type: 'searchset',
  total: 201,
  link: [
    {
      relation: 'self',
      url: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition?patient=4596007'
    }
  ],
  entry: [
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p8645907',
      resource: {
        resourceType: 'Condition',
        id: 'p8645907',
        meta: {
          versionId: '8645915',
          lastUpdated: '2018-06-19T20:56:26.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Arm contusion, Contusion of upper limb (disorder)</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Resolved</b>: False</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2018-06-19',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '68142008',
              display: 'Contusion of upper limb (disorder)',
              userSelected: false
            }
          ],
          text: 'Arm contusion'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        verificationStatus: 'entered-in-error',
        abatementBoolean: false
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p10066237',
      resource: {
        resourceType: 'Condition',
        id: 'p10066237',
        meta: {
          versionId: '10066237',
          lastUpdated: '2019-01-12T22:18:03.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Freetext Condition</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  1, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/2042017',
          display: 'Generated Domain User for 0'
        },
        dateRecorded: '2019-01-12',
        code: {
          text: 'Freetext Condition'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2017-01-01'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p8645919',
      resource: {
        resourceType: 'Condition',
        id: 'p8645919',
        meta: {
          versionId: '8645919',
          lastUpdated: '2018-06-19T20:56:47.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Heart abnormality, Heart disease (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2018-06-19',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '56265001',
              display: 'Heart disease (disorder)',
              userSelected: false
            }
          ],
          text: 'Heart abnormality'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        abatementBoolean: false
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43758559',
      resource: {
        resourceType: 'Condition',
        id: 'd43758559',
        meta: {
          versionId: '43758561',
          lastUpdated: '2019-12-04T19:10:38.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-04',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43758575',
      resource: {
        resourceType: 'Condition',
        id: 'd43758575',
        meta: {
          versionId: '43758577',
          lastUpdated: '2019-12-04T19:31:37.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-04',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43758571',
      resource: {
        resourceType: 'Condition',
        id: 'd43758571',
        meta: {
          versionId: '43758573',
          lastUpdated: '2019-12-04T19:29:48.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-04',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43758579',
      resource: {
        resourceType: 'Condition',
        id: 'd43758579',
        meta: {
          versionId: '43758581',
          lastUpdated: '2019-12-04T19:31:54.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-04',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43734555',
      resource: {
        resourceType: 'Condition',
        id: 'd43734555',
        meta: {
          versionId: '43734557',
          lastUpdated: '2019-12-03T21:09:16.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-03',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d39274555',
      resource: {
        resourceType: 'Condition',
        id: 'd39274555',
        meta: {
          versionId: '39274555',
          lastUpdated: '2018-09-13T19:59:16.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4453906'
        },
        asserter: {
          reference: 'Practitioner/4554007',
          display: 'JUX, PW'
        },
        dateRecorded: '2018-09-13',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43746609',
      resource: {
        resourceType: 'Condition',
        id: 'd43746609',
        meta: {
          versionId: '43746611',
          lastUpdated: '2019-12-04T17:46:04.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-04',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43734571',
      resource: {
        resourceType: 'Condition',
        id: 'd43734571',
        meta: {
          versionId: '43734573',
          lastUpdated: '2019-12-03T21:26:42.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-03',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44778557',
      resource: {
        resourceType: 'Condition',
        id: 'd44778557',
        meta: {
          versionId: '44778559',
          lastUpdated: '2020-02-17T20:47:57.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-02-17',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d42842563',
      resource: {
        resourceType: 'Condition',
        id: 'd42842563',
        meta: {
          versionId: '42846555',
          lastUpdated: '2019-09-26T16:17:58.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-09-26',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d40822581',
      resource: {
        resourceType: 'Condition',
        id: 'd40822581',
        meta: {
          versionId: '40822581',
          lastUpdated: '2019-04-03T16:17:59.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4453906'
        },
        asserter: {
          reference: 'Practitioner/4554007',
          display: 'JUX, PW'
        },
        dateRecorded: '2019-04-03',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43734563',
      resource: {
        resourceType: 'Condition',
        id: 'd43734563',
        meta: {
          versionId: '43734565',
          lastUpdated: '2019-12-03T21:19:46.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-03',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43758587',
      resource: {
        resourceType: 'Condition',
        id: 'd43758587',
        meta: {
          versionId: '43758589',
          lastUpdated: '2019-12-04T19:38:47.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-04',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43266555',
      resource: {
        resourceType: 'Condition',
        id: 'd43266555',
        meta: {
          versionId: '43266557',
          lastUpdated: '2019-10-29T15:38:48.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-10-29',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43758555',
      resource: {
        resourceType: 'Condition',
        id: 'd43758555',
        meta: {
          versionId: '43758557',
          lastUpdated: '2019-12-04T19:10:01.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-04',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d40822579',
      resource: {
        resourceType: 'Condition',
        id: 'd40822579',
        meta: {
          versionId: '40822579',
          lastUpdated: '2019-04-03T16:07:06.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4453906'
        },
        asserter: {
          reference: 'Practitioner/4554007',
          display: 'JUX, PW'
        },
        dateRecorded: '2019-04-03',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43734567',
      resource: {
        resourceType: 'Condition',
        id: 'd43734567',
        meta: {
          versionId: '43734569',
          lastUpdated: '2019-12-03T21:23:13.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-03',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44778561',
      resource: {
        resourceType: 'Condition',
        id: 'd44778561',
        meta: {
          versionId: '44778563',
          lastUpdated: '2020-02-17T20:49:24.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4554007',
          display: 'JUX, PW'
        },
        dateRecorded: '2020-02-17',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d42162557',
      resource: {
        resourceType: 'Condition',
        id: 'd42162557',
        meta: {
          versionId: '42162559',
          lastUpdated: '2019-08-09T15:30:56.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-08-09',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43746617',
      resource: {
        resourceType: 'Condition',
        id: 'd43746617',
        meta: {
          versionId: '43746619',
          lastUpdated: '2019-12-04T17:47:02.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-04',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43746621',
      resource: {
        resourceType: 'Condition',
        id: 'd43746621',
        meta: {
          versionId: '43746623',
          lastUpdated: '2019-12-04T17:47:19.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-04',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43734559',
      resource: {
        resourceType: 'Condition',
        id: 'd43734559',
        meta: {
          versionId: '43734561',
          lastUpdated: '2019-12-03T21:19:10.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-03',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43746613',
      resource: {
        resourceType: 'Condition',
        id: 'd43746613',
        meta: {
          versionId: '43746615',
          lastUpdated: '2019-12-04T17:46:39.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-04',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41138555',
      resource: {
        resourceType: 'Condition',
        id: 'd41138555',
        meta: {
          versionId: '41138563',
          lastUpdated: '2019-05-02T21:16:53.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4554007',
          display: 'JUX, PW'
        },
        dateRecorded: '2019-05-02',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41202649',
      resource: {
        resourceType: 'Condition',
        id: 'd41202649',
        meta: {
          versionId: '41202649',
          lastUpdated: '2019-05-09T19:25:24.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Complete traumatic amputation at knee level, unspecified lower leg, initial encounter, Complete traumatic amputation at knee level, unspecified lower leg, initial encounter</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 13, 2018  7:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-05-09',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'S88.019A',
              display: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter',
              userSelected: true
            }
          ],
          text: 'Complete traumatic amputation at knee level, unspecified lower leg, initial encounter'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2018-09-13T19:59:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p10066997',
      resource: {
        resourceType: 'Condition',
        id: 'p10066997',
        meta: {
          versionId: '10066997',
          lastUpdated: '2019-01-13T05:03:40.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: COPD Condition by ZeOmega</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  1, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/2042017',
          display: 'Generated Domain User for 0'
        },
        dateRecorded: '2019-01-13',
        code: {
          text: 'COPD Condition by ZeOmega'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2017-01-01'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d45258555',
      resource: {
        resourceType: 'Condition',
        id: 'd45258555',
        meta: {
          versionId: '45258557',
          lastUpdated: '2020-03-10T01:58:11.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Chronic thromboembolic pulmonary hypertension, Chronic thromboembolic pulmonary hypertension</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Mar 10, 2020  1:57 A.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-03-10',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'I27.24',
              display: 'Chronic thromboembolic pulmonary hypertension',
              userSelected: true
            }
          ],
          text: 'Chronic thromboembolic pulmonary hypertension'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-03-10T01:57:52.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d42846557',
      resource: {
        resourceType: 'Condition',
        id: 'd42846557',
        meta: {
          versionId: '44162559',
          lastUpdated: '2020-01-08T16:12:54.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Late congenital syphilitic arthropathy, Late congenital syphilitic arthropathy</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 26, 2019  4:19 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-09-26',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'A50.55',
              display: 'Late congenital syphilitic arthropathy',
              userSelected: true
            }
          ],
          text: 'Late congenital syphilitic arthropathy'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-09-26T16:19:21.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43758567',
      resource: {
        resourceType: 'Condition',
        id: 'd43758567',
        meta: {
          versionId: '43758569',
          lastUpdated: '2019-12-04T19:28:54.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Type 1 diabetes mellitus with diabetic dermatitis, Type 1 diabetes mellitus with diabetic dermatitis</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Dec  4, 2019  7:26 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-04',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E10.620',
              display: 'Type 1 diabetes mellitus with diabetic dermatitis',
              userSelected: true
            }
          ],
          text: 'Type 1 diabetes mellitus with diabetic dermatitis'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-12-04T19:26:09.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43514555',
      resource: {
        resourceType: 'Condition',
        id: 'd43514555',
        meta: {
          versionId: '43514557',
          lastUpdated: '2019-11-13T14:17:02.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Type 1 diabetes mellitus with diabetic dermatitis, Type 1 diabetes mellitus with diabetic dermatitis</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Nov 13, 2019  2:16 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-11-13',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E10.620',
              display: 'Type 1 diabetes mellitus with diabetic dermatitis',
              userSelected: true
            }
          ],
          text: 'Type 1 diabetes mellitus with diabetic dermatitis'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-11-13T14:16:53.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p11229869',
      resource: {
        resourceType: 'Condition',
        id: 'p11229869',
        meta: {
          versionId: '11229869',
          lastUpdated: '2019-04-15T23:30:56.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: COPD, severe test, Severe chronic obstructive pulmonary disease (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4554007',
          display: 'JUX, PW'
        },
        dateRecorded: '2019-04-15',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '313299006',
              display: 'Severe chronic obstructive pulmonary disease (disorder)',
              userSelected: false
            },
            {
              system: 'http://e-imo.com/products/problem-it',
              code: '960531',
              display: 'COPD, severe',
              userSelected: false
            }
          ],
          text: 'COPD, severe test'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        abatementBoolean: false
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44590555',
      resource: {
        resourceType: 'Condition',
        id: 'd44590555',
        meta: {
          versionId: '44590557',
          lastUpdated: '2020-02-07T21:28:20.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Pressure ulcer of head, stage 4, Pressure ulcer of head, stage 4</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Feb  7, 2020  9:27 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-02-07',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'L89.814',
              display: 'Pressure ulcer of head, stage 4',
              userSelected: true
            }
          ],
          text: 'Pressure ulcer of head, stage 4'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-02-07T21:27:28.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44590559',
      resource: {
        resourceType: 'Condition',
        id: 'd44590559',
        meta: {
          versionId: '45258569',
          lastUpdated: '2020-03-10T01:58:22.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Pressure ulcer of head, stage 4, Pressure ulcer of head, stage 4</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Feb  7, 2020  9:28 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-02-07',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'L89.814',
              display: 'Pressure ulcer of head, stage 4',
              userSelected: true
            }
          ],
          text: 'Pressure ulcer of head, stage 4'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-02-07T21:28:44.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p10066253',
      resource: {
        resourceType: 'Condition',
        id: 'p10066253',
        meta: {
          versionId: '10066253',
          lastUpdated: '2019-01-12T22:19:30.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Freetext Condition</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  1, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/2042017',
          display: 'Generated Domain User for 0'
        },
        dateRecorded: '2019-01-12',
        code: {
          text: 'Freetext Condition'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2017-01-01'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41032483',
      resource: {
        resourceType: 'Condition',
        id: 'd41032483',
        meta: {
          versionId: '41032483',
          lastUpdated: '2019-04-18T21:07:31.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Chronic obstructive pulmonary disease, unspecified, Chronic obstructive pulmonary disease, unspecified</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 18, 2019  9:06 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-18',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'J44.9',
              display: 'Chronic obstructive pulmonary disease, unspecified',
              userSelected: true
            }
          ],
          text: 'Chronic obstructive pulmonary disease, unspecified'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-18T21:06:49.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41174555',
      resource: {
        resourceType: 'Condition',
        id: 'd41174555',
        meta: {
          versionId: '44162561',
          lastUpdated: '2020-01-08T16:12:57.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Chronic kidney disease, stage 3 (moderate), Chronic kidney disease, stage 3 (moderate)</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: May  6, 2019  5:27 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-05-06',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'N18.3',
              display: 'Chronic kidney disease, stage 3 (moderate)',
              userSelected: true
            }
          ],
          text: 'Chronic kidney disease, stage 3 (moderate)'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-05-06T17:27:58.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p10070901',
      resource: {
        resourceType: 'Condition',
        id: 'p10070901',
        meta: {
          versionId: '10070901',
          lastUpdated: '2019-01-13T22:00:37.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: COPD Condition by ZeOmega</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  1, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/2042017',
          display: 'Generated Domain User for 0'
        },
        dateRecorded: '2019-01-13',
        code: {
          text: 'COPD Condition by ZeOmega'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2017-01-01'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d42850611',
      resource: {
        resourceType: 'Condition',
        id: 'd42850611',
        meta: {
          versionId: '42850613',
          lastUpdated: '2019-09-26T18:16:53.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Sepsis, unspecified organism, Sepsis, unspecified organism</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 26, 2019  6:16 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-09-26',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'A41.9',
              display: 'Sepsis, unspecified organism',
              userSelected: true
            }
          ],
          text: 'Sepsis, unspecified organism'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-09-26T18:16:48.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44350571',
      resource: {
        resourceType: 'Condition',
        id: 'd44350571',
        meta: {
          versionId: '44350573',
          lastUpdated: '2020-01-21T21:35:35.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Rheumatoid arthritis, unspecified, Rheumatoid arthritis, unspecified</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Jan 21, 2020  9:34 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-01-21',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'M06.9',
              display: 'Rheumatoid arthritis, unspecified',
              userSelected: true
            }
          ],
          text: 'Rheumatoid arthritis, unspecified'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-01-21T21:34:09.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41034599',
      resource: {
        resourceType: 'Condition',
        id: 'd41034599',
        meta: {
          versionId: '41034603',
          lastUpdated: '2019-04-19T14:56:25.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Malignant neoplasm of appendix, Malignant neoplasm of appendix</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 19, 2019  2:22 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-19',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'C18.1',
              display: 'Malignant neoplasm of appendix',
              userSelected: true
            }
          ],
          text: 'Malignant neoplasm of appendix'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-19T14:22:03.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41138559',
      resource: {
        resourceType: 'Condition',
        id: 'd41138559',
        meta: {
          versionId: '41138561',
          lastUpdated: '2019-05-02T21:15:06.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Malignant neoplasm of appendix, Malignant neoplasm of appendix</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: May  2, 2019  9:11 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4554007',
          display: 'JUX, PW'
        },
        dateRecorded: '2019-05-02',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'C18.1',
              display: 'Malignant neoplasm of appendix',
              userSelected: true
            }
          ],
          text: 'Malignant neoplasm of appendix'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-05-02T21:11:22.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p6765861',
      resource: {
        resourceType: 'Condition',
        id: 'p6765861',
        meta: {
          versionId: '6765861',
          lastUpdated: '2016-11-08T15:43:32.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Asthma in pediatric patient, Asthma (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: 1989</p><p><b>Resolved</b>: False</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4474007',
          display: 'Pickering, Kathy'
        },
        dateRecorded: '2016-11-08',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '195967001',
              display: 'Asthma (disorder)',
              userSelected: false
            },
            {
              system: 'http://e-imo.com/products/problem-it',
              code: '33989645',
              display: 'Asthma in pediatric patient',
              userSelected: false
            }
          ],
          text: 'Asthma in pediatric patient'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        onsetDateTime: '1989',
        abatementBoolean: false
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d37002561',
      resource: {
        resourceType: 'Condition',
        id: 'd37002561',
        meta: {
          versionId: '37002561',
          lastUpdated: '2017-10-09T14:14:41.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Asthma in pediatric patient, Asthma (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Oct  9, 2017  2:14 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4646008',
          display: 'SWL, PW'
        },
        dateRecorded: '2017-10-09',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '195967001',
              display: 'Asthma (disorder)',
              userSelected: false
            },
            {
              system: 'http://e-imo.com/products/problem-it',
              code: '33989645',
              display: 'Asthma in pediatric patient',
              userSelected: false
            }
          ],
          text: 'Asthma in pediatric patient'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        onsetDateTime: '2017-10-09T14:14:25.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d36322555',
      resource: {
        resourceType: 'Condition',
        id: 'd36322555',
        meta: {
          versionId: '36322555',
          lastUpdated: '2016-11-08T15:48:34.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Asthma in pediatric patient, Asthma (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  8, 2016  6:00 A.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4474007',
          display: 'Pickering, Kathy'
        },
        dateRecorded: '2016-11-08',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '195967001',
              display: 'Asthma (disorder)',
              userSelected: false
            },
            {
              system: 'http://e-imo.com/products/problem-it',
              code: '33989645',
              display: 'Asthma in pediatric patient',
              userSelected: false
            },
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'J45.909',
              display: 'Unspecified asthma, uncomplicated',
              userSelected: false
            }
          ],
          text: 'Asthma in pediatric patient'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        onsetDateTime: '2016-11-08T06:00:00.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d40974555',
      resource: {
        resourceType: 'Condition',
        id: 'd40974555',
        meta: {
          versionId: '41032481',
          lastUpdated: '2019-04-18T21:06:24.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: COPD, severe test, Severe chronic obstructive pulmonary disease (disorder)</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 15, 2019  5:00 A.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4554007',
          display: 'JUX, PW'
        },
        dateRecorded: '2019-04-15',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '313299006',
              display: 'Severe chronic obstructive pulmonary disease (disorder)',
              userSelected: true
            },
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'J44.9',
              display: 'Chronic obstructive pulmonary disease, unspecified',
              userSelected: false
            }
          ],
          text: 'COPD, severe test'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-15T05:00:00.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p11557863',
      resource: {
        resourceType: 'Condition',
        id: 'p11557863',
        meta: {
          versionId: '11557863',
          lastUpdated: '2019-05-10T22:08:10.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Amyotrophy due to type 2 diabetes mellitus, Amyotrophy due to type 2 diabetes mellitus (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4646008',
          display: 'SWL, PW'
        },
        dateRecorded: '2019-05-10',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '427027005',
              display: 'Amyotrophy due to type 2 diabetes mellitus (disorder)',
              userSelected: true
            }
          ],
          text: 'Amyotrophy due to type 2 diabetes mellitus'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        abatementBoolean: false
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41214557',
      resource: {
        resourceType: 'Condition',
        id: 'd41214557',
        meta: {
          versionId: '43586565',
          lastUpdated: '2019-11-18T15:59:44.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Amyotrophy due to type 2 diabetes mellitus, Amyotrophy due to type 2 diabetes mellitus (disorder)</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: May 10, 2019  5:00 A.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4646008',
          display: 'SWL, PW'
        },
        dateRecorded: '2019-05-10',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '427027005',
              display: 'Amyotrophy due to type 2 diabetes mellitus (disorder)',
              userSelected: true
            },
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E11.44',
              display: 'Type 2 diabetes mellitus with diabetic amyotrophy',
              userSelected: false
            }
          ],
          text: 'Amyotrophy due to type 2 diabetes mellitus'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-05-10T05:00:00.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44446615',
      resource: {
        resourceType: 'Condition',
        id: 'd44446615',
        meta: {
          versionId: '45258561',
          lastUpdated: '2020-03-10T01:58:15.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Heart-lung transplant failure, Heart-lung transplant failure</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Jan 29, 2020 10:34 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-01-29',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'T86.32',
              display: 'Heart-lung transplant failure',
              userSelected: true
            }
          ],
          text: 'Heart-lung transplant failure'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-01-29T22:34:47.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d40906563',
      resource: {
        resourceType: 'Condition',
        id: 'd40906563',
        meta: {
          versionId: '40906565',
          lastUpdated: '2019-04-10T21:23:26.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Chronic meningococcemia, Chronic meningococcemia</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr  3, 2019  4:19 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-10',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'A39.3',
              display: 'Chronic meningococcemia',
              userSelected: true
            }
          ],
          text: 'Chronic meningococcemia'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-03T16:19:37.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44674555',
      resource: {
        resourceType: 'Condition',
        id: 'd44674555',
        meta: {
          versionId: '45258563',
          lastUpdated: '2020-03-10T01:58:17.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Chronic meningococcemia, Chronic meningococcemia</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr  3, 2019  4:19 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-02-12',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'A39.3',
              display: 'Chronic meningococcemia',
              userSelected: true
            }
          ],
          text: 'Chronic meningococcemia'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-03T16:19:37.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d40822583',
      resource: {
        resourceType: 'Condition',
        id: 'd40822583',
        meta: {
          versionId: '40822583',
          lastUpdated: '2019-04-03T16:19:50.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Chronic meningococcemia, Chronic meningococcemia</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Apr  3, 2019  4:19 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4607906'
        },
        asserter: {
          reference: 'Practitioner/4554007',
          display: 'JUX, PW'
        },
        dateRecorded: '2019-04-03',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'A39.3',
              display: 'Chronic meningococcemia',
              userSelected: true
            }
          ],
          text: 'Chronic meningococcemia'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        onsetDateTime: '2019-04-03T16:19:37.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d40906597',
      resource: {
        resourceType: 'Condition',
        id: 'd40906597',
        meta: {
          versionId: '44518571',
          lastUpdated: '2020-02-03T21:30:55.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Chronic meningococcemia, Chronic meningococcemia</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr  3, 2019  4:19 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-10',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'A39.3',
              display: 'Chronic meningococcemia',
              userSelected: true
            }
          ],
          text: 'Chronic meningococcemia'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-03T16:19:37.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d45366555',
      resource: {
        resourceType: 'Condition',
        id: 'd45366555',
        meta: {
          versionId: '45366557',
          lastUpdated: '2020-03-18T02:25:53.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Chronic meningococcemia, Chronic meningococcemia</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr  3, 2019  4:19 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-03-18',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'A39.3',
              display: 'Chronic meningococcemia',
              userSelected: true
            }
          ],
          text: 'Chronic meningococcemia'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-03T16:19:37.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d40906559',
      resource: {
        resourceType: 'Condition',
        id: 'd40906559',
        meta: {
          versionId: '40906561',
          lastUpdated: '2019-04-10T21:22:56.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Chronic meningococcemia, Chronic meningococcemia</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr  3, 2019  4:19 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-10',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'A39.3',
              display: 'Chronic meningococcemia',
              userSelected: true
            }
          ],
          text: 'Chronic meningococcemia'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-03T16:19:37.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p9949895',
      resource: {
        resourceType: 'Condition',
        id: 'p9949895',
        meta: {
          versionId: '9949895',
          lastUpdated: '2019-01-07T20:35:42.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Disorder of lung</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  7, 2019</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-01-07',
        code: {
          text: 'Disorder of lung'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2019-01-07'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p7042039',
      resource: {
        resourceType: 'Condition',
        id: 'p7042039',
        meta: {
          versionId: '7637919',
          lastUpdated: '2018-02-13T18:39:08.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Adenocarcinoma, appendix, Adenocarcinoma of appendix (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Severity</b>: Moderate</p><p><b>Resolved</b>: False</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2017-08-02',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '413445002',
              display: 'Adenocarcinoma of appendix (disorder)',
              userSelected: false
            }
          ],
          text: 'Adenocarcinoma, appendix'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        severity: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '6736007',
              display: 'Moderate',
              userSelected: false
            }
          ],
          text: 'Moderate'
        },
        abatementBoolean: false
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p7973917',
      resource: {
        resourceType: 'Condition',
        id: 'p7973917',
        meta: {
          versionId: '7973917',
          lastUpdated: '2018-04-06T17:06:44.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Diabetes, Diabetes mellitus (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2018-04-06',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '73211009',
              display: 'Diabetes mellitus (disorder)',
              userSelected: false
            }
          ],
          text: 'Diabetes'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        abatementBoolean: false
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43990557',
      resource: {
        resourceType: 'Condition',
        id: 'd43990557',
        meta: {
          versionId: '43990567',
          lastUpdated: '2019-12-23T15:54:48.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Type 2 diabetes mellitus with diabetic neuropathy, unspecified, Type 2 diabetes mellitus with diabetic neuropathy, unspecified</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Dec 23, 2019  3:53 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-23',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E11.40',
              display: 'Type 2 diabetes mellitus with diabetic neuropathy, unspecified',
              userSelected: true
            }
          ],
          text: 'Type 2 diabetes mellitus with diabetic neuropathy, unspecified'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-12-23T15:53:09.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43586559',
      resource: {
        resourceType: 'Condition',
        id: 'd43586559',
        meta: {
          versionId: '43586563',
          lastUpdated: '2019-11-18T15:59:25.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Type 2 diabetes mellitus with diabetic neuropathy, unspecified, Type 2 diabetes mellitus with diabetic neuropathy, unspecified</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Nov 18, 2019  3:55 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-11-18',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E11.40',
              display: 'Type 2 diabetes mellitus with diabetic neuropathy, unspecified',
              userSelected: true
            }
          ],
          text: 'Type 2 diabetes mellitus with diabetic neuropathy, unspecified'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-11-18T15:55:50.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43758591',
      resource: {
        resourceType: 'Condition',
        id: 'd43758591',
        meta: {
          versionId: '43990563',
          lastUpdated: '2019-12-23T15:54:39.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Type 2 diabetes mellitus with severe nonproliferative diabetic retinopathy without macular edema, left eye, Type 2 diabetes mellitus with severe nonproliferative diabetic retinopathy without macular edema, left eye</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Dec  4, 2019  7:50 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-04',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E11.3492',
              display: 'Type 2 diabetes mellitus with severe nonproliferative diabetic retinopathy without macular edema, left eye',
              userSelected: true
            }
          ],
          text: 'Type 2 diabetes mellitus with severe nonproliferative diabetic retinopathy without macular edema, left eye'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-12-04T19:50:01.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44350591',
      resource: {
        resourceType: 'Condition',
        id: 'd44350591',
        meta: {
          versionId: '44350593',
          lastUpdated: '2020-01-21T21:53:39.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Type 2 diabetes mellitus with severe nonproliferative diabetic retinopathy without macular edema, left eye, Type 2 diabetes mellitus with severe nonproliferative diabetic retinopathy without macular edema, left eye</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Jan 21, 2020  9:53 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-01-21',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E11.3492',
              display: 'Type 2 diabetes mellitus with severe nonproliferative diabetic retinopathy without macular edema, left eye',
              userSelected: true
            }
          ],
          text: 'Type 2 diabetes mellitus with severe nonproliferative diabetic retinopathy without macular edema, left eye'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-01-21T21:53:28.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44270555',
      resource: {
        resourceType: 'Condition',
        id: 'd44270555',
        meta: {
          versionId: '44270557',
          lastUpdated: '2020-01-15T03:37:50.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Type 2 diabetes mellitus with severe nonproliferative diabetic retinopathy without macular edema, left eye, Type 2 diabetes mellitus with severe nonproliferative diabetic retinopathy without macular edema, left eye</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Jan 15, 2020  3:37 A.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-01-15',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E11.3492',
              display: 'Type 2 diabetes mellitus with severe nonproliferative diabetic retinopathy without macular edema, left eye',
              userSelected: true
            }
          ],
          text: 'Type 2 diabetes mellitus with severe nonproliferative diabetic retinopathy without macular edema, left eye'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-01-15T03:37:40.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p9974021',
      resource: {
        resourceType: 'Condition',
        id: 'p9974021',
        meta: {
          versionId: '9974021',
          lastUpdated: '2019-01-08T18:31:28.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Disorder of lung</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  8, 2019</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-01-08',
        code: {
          text: 'Disorder of lung'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2019-01-08'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d42162561',
      resource: {
        resourceType: 'Condition',
        id: 'd42162561',
        meta: {
          versionId: '43586575',
          lastUpdated: '2019-11-18T16:00:23.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cannabis use, unspecified with anxiety disorder, Cannabis use, unspecified with anxiety disorder</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Aug  9, 2019  3:31 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-08-09',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F12.980',
              display: 'Cannabis use, unspecified with anxiety disorder',
              userSelected: true
            }
          ],
          text: 'Cannabis use, unspecified with anxiety disorder'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-08-09T15:31:36.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41202603',
      resource: {
        resourceType: 'Condition',
        id: 'd41202603',
        meta: {
          versionId: '42162555',
          lastUpdated: '2019-08-09T15:30:25.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cannabis use, unspecified with anxiety disorder, Cannabis use, unspecified with anxiety disorder</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: May  9, 2019  4:42 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-05-09',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F12.980',
              display: 'Cannabis use, unspecified with anxiety disorder',
              userSelected: true
            }
          ],
          text: 'Cannabis use, unspecified with anxiety disorder'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-05-09T16:42:43.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41032491',
      resource: {
        resourceType: 'Condition',
        id: 'd41032491',
        meta: {
          versionId: '41032495',
          lastUpdated: '2019-04-18T21:09:59.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cannabis use, unspecified with anxiety disorder, Cannabis use, unspecified with anxiety disorder</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 18, 2019  9:09 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-18',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F12.980',
              display: 'Cannabis use, unspecified with anxiety disorder',
              userSelected: true
            }
          ],
          text: 'Cannabis use, unspecified with anxiety disorder'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-18T21:09:07.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p10066653',
      resource: {
        resourceType: 'Condition',
        id: 'p10066653',
        meta: {
          versionId: '10066653',
          lastUpdated: '2019-01-12T23:38:05.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: COPD Condition by ZeOmega</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  1, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/2042017',
          display: 'Generated Domain User for 0'
        },
        dateRecorded: '2019-01-12',
        code: {
          text: 'COPD Condition by ZeOmega'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2017-01-01'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43962555',
      resource: {
        resourceType: 'Condition',
        id: 'd43962555',
        meta: {
          versionId: '43990571',
          lastUpdated: '2019-12-23T15:54:58.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Mixed cellularity Hodgkin lymphoma, lymph nodes of head, face, and neck, Mixed cellularity classical Hodgkin lymphoma, lymph nodes of head, face, and neck</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Dec 19, 2019 11:27 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-19',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'C81.21',
              display: 'Mixed cellularity classical Hodgkin lymphoma, lymph nodes of head, face, and neck',
              userSelected: true
            }
          ],
          text: 'Mixed cellularity Hodgkin lymphoma, lymph nodes of head, face, and neck'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-12-19T23:27:54.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p10066941',
      resource: {
        resourceType: 'Condition',
        id: 'p10066941',
        meta: {
          versionId: '10066941',
          lastUpdated: '2019-01-13T04:14:07.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: COPD Condition by ZeOmega</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  1, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/2042017',
          display: 'Generated Domain User for 0'
        },
        dateRecorded: '2019-01-13',
        code: {
          text: 'COPD Condition by ZeOmega'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2017-01-01'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p8645927',
      resource: {
        resourceType: 'Condition',
        id: 'p8645927',
        meta: {
          versionId: '8645927',
          lastUpdated: '2018-06-19T20:57:16.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: CHF (congestive heart failure), Congestive heart failure (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2018-06-19',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '42343007',
              display: 'Congestive heart failure (disorder)',
              userSelected: false
            }
          ],
          text: 'CHF (congestive heart failure)'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        abatementBoolean: false
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d42850605',
      resource: {
        resourceType: 'Condition',
        id: 'd42850605',
        meta: {
          versionId: '44518569',
          lastUpdated: '2020-02-03T21:30:52.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Bone and joint lesions of yaws, Bone and joint lesions of yaws</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 26, 2019  5:57 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-09-26',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'A66.6',
              display: 'Bone and joint lesions of yaws',
              userSelected: true
            }
          ],
          text: 'Bone and joint lesions of yaws'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-09-26T17:57:52.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p10070485',
      resource: {
        resourceType: 'Condition',
        id: 'p10070485',
        meta: {
          versionId: '10070485',
          lastUpdated: '2019-01-13T18:18:48.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: COPD Condition by ZeOmega</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  1, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/2042017',
          display: 'Generated Domain User for 0'
        },
        dateRecorded: '2019-01-13',
        code: {
          text: 'COPD Condition by ZeOmega'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2017-01-01'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p10067093',
      resource: {
        resourceType: 'Condition',
        id: 'p10067093',
        meta: {
          versionId: '10067093',
          lastUpdated: '2019-01-13T06:16:31.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: COPD Condition by ZeOmega</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  1, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/2042017',
          display: 'Generated Domain User for 0'
        },
        dateRecorded: '2019-01-13',
        code: {
          text: 'COPD Condition by ZeOmega'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2017-01-01'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d45258573',
      resource: {
        resourceType: 'Condition',
        id: 'd45258573',
        meta: {
          versionId: '45366559',
          lastUpdated: '2020-03-18T02:25:57.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Mixed simple and mucopurulent chronic bronchitis, Mixed simple and mucopurulent chronic bronchitis</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Mar 10, 2020  2:06 A.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-03-10',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'J41.8',
              display: 'Mixed simple and mucopurulent chronic bronchitis',
              userSelected: true
            }
          ],
          text: 'Mixed simple and mucopurulent chronic bronchitis'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-03-10T02:06:54.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p10069901',
      resource: {
        resourceType: 'Condition',
        id: 'p10069901',
        meta: {
          versionId: '10069901',
          lastUpdated: '2019-01-13T14:35:57.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: COPD Condition by ZeOmega</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  1, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/2042017',
          display: 'Generated Domain User for 0'
        },
        dateRecorded: '2019-01-13',
        code: {
          text: 'COPD Condition by ZeOmega'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2017-01-01'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p10070909',
      resource: {
        resourceType: 'Condition',
        id: 'p10070909',
        meta: {
          versionId: '10070909',
          lastUpdated: '2019-01-13T22:01:13.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: COPD Condition by ZeOmega</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  1, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/2042017',
          display: 'Generated Domain User for 0'
        },
        dateRecorded: '2019-01-13',
        code: {
          text: 'COPD Condition by ZeOmega'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2017-01-01'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43974611',
      resource: {
        resourceType: 'Condition',
        id: 'd43974611',
        meta: {
          versionId: '43974613',
          lastUpdated: '2019-12-20T19:26:35.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Pulmonary anthrax, Pulmonary anthrax</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Dec 20, 2019  7:26 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-20',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'A22.1',
              display: 'Pulmonary anthrax',
              userSelected: true
            }
          ],
          text: 'Pulmonary anthrax'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-12-20T19:26:23.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43974619',
      resource: {
        resourceType: 'Condition',
        id: 'd43974619',
        meta: {
          versionId: '43974621',
          lastUpdated: '2019-12-20T19:51:07.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Pulmonary anthrax, Pulmonary anthrax</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Dec 20, 2019  7:50 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-20',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'A22.1',
              display: 'Pulmonary anthrax',
              userSelected: true
            }
          ],
          text: 'Pulmonary anthrax'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-12-20T19:50:58.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41394555',
      resource: {
        resourceType: 'Condition',
        id: 'd41394555',
        meta: {
          versionId: '41394557',
          lastUpdated: '2019-05-31T13:49:55.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Headaches due to old head injury, Headaches due to old head injury</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: May 31, 2019  5:00 A.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4646008',
          display: 'SWL, PW'
        },
        dateRecorded: '2019-05-31',
        code: {
          coding: [
            {
              system: 'http://e-imo.com/products/problem-it',
              code: '10069866',
              display: 'Headaches due to old head injury',
              userSelected: false
            },
            {
              system: 'http://snomed.info/sct',
              code: '25064002',
              display: 'Headache (finding)',
              userSelected: false
            },
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'G44.309',
              display: 'Post-traumatic headache, unspecified, not intractable',
              userSelected: false
            }
          ],
          text: 'Headaches due to old head injury'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        onsetDateTime: '2019-05-31T05:00:00.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p9949887',
      resource: {
        resourceType: 'Condition',
        id: 'p9949887',
        meta: {
          versionId: '9949887',
          lastUpdated: '2019-01-07T20:35:00.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Disorder of lung</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  7, 2019</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-01-07',
        code: {
          text: 'Disorder of lung'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2019-01-07'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43874557',
      resource: {
        resourceType: 'Condition',
        id: 'd43874557',
        meta: {
          versionId: '44162565',
          lastUpdated: '2020-01-08T16:13:13.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Acute right heart failure, Right heart failure due to left heart failure</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Nov  7, 2019  8:46 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/2042017',
          display: 'Generated Domain User for 0'
        },
        dateRecorded: '2019-12-16',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'I50.814',
              display: 'Right heart failure due to left heart failure',
              userSelected: true
            }
          ],
          text: 'Acute right heart failure'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-11-07T20:46:20.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41032489',
      resource: {
        resourceType: 'Condition',
        id: 'd41032489',
        meta: {
          versionId: '41032499',
          lastUpdated: '2019-04-18T21:10:10.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Acute diastolic (congestive) heart failure, Acute diastolic (congestive) heart failure</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 18, 2019  9:08 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-18',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'I50.31',
              display: 'Acute diastolic (congestive) heart failure',
              userSelected: true
            }
          ],
          text: 'Acute diastolic (congestive) heart failure'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-18T21:08:55.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d40954557',
      resource: {
        resourceType: 'Condition',
        id: 'd40954557',
        meta: {
          versionId: '40954557',
          lastUpdated: '2019-04-15T13:48:38.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Acute diastolic (congestive) heart failure, Acute diastolic (congestive) heart failure</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 15, 2019  5:00 A.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4554007',
          display: 'JUX, PW'
        },
        dateRecorded: '2019-04-15',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'I50.31',
              display: 'Acute diastolic (congestive) heart failure',
              userSelected: true
            }
          ],
          text: 'Acute diastolic (congestive) heart failure'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-15T05:00:00.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p9973989',
      resource: {
        resourceType: 'Condition',
        id: 'p9973989',
        meta: {
          versionId: '9973989',
          lastUpdated: '2019-01-08T18:27:25.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Disorder of lung</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  8, 2019</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-01-08',
        code: {
          text: 'Disorder of lung'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2019-01-08'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p11229861',
      resource: {
        resourceType: 'Condition',
        id: 'p11229861',
        meta: {
          versionId: '11229861',
          lastUpdated: '2019-04-15T23:28:10.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Diabetes mellitus due to underlying condition with diabetic chronic kidney disease, Diabetes mellitus due to underlying condition with diabetic chronic kidney disease</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4554007',
          display: 'JUX, PW'
        },
        dateRecorded: '2019-04-15',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E08.22',
              display: 'Diabetes mellitus due to underlying condition with diabetic chronic kidney disease',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8801005',
              display: 'Secondary diabetes mellitus (disorder)',
              userSelected: false
            }
          ],
          text: 'Diabetes mellitus due to underlying condition with diabetic chronic kidney disease'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        abatementBoolean: false
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41202573',
      resource: {
        resourceType: 'Condition',
        id: 'd41202573',
        meta: {
          versionId: '41202573',
          lastUpdated: '2019-05-09T15:44:42.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Diabetes mellitus due to underlying condition with diabetic chronic kidney disease, Diabetes mellitus due to underlying condition with diabetic chronic kidney disease</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: May  9, 2019  3:38 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-05-09',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E08.22',
              display: 'Diabetes mellitus due to underlying condition with diabetic chronic kidney disease',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8801005',
              display: 'Secondary diabetes mellitus (disorder)',
              userSelected: false
            }
          ],
          text: 'Diabetes mellitus due to underlying condition with diabetic chronic kidney disease'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-05-09T15:38:34.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41202575',
      resource: {
        resourceType: 'Condition',
        id: 'd41202575',
        meta: {
          versionId: '41202575',
          lastUpdated: '2019-05-09T15:44:39.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Diabetes mellitus due to underlying condition with diabetic chronic kidney disease, Diabetes mellitus due to underlying condition with diabetic chronic kidney disease</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: May  9, 2019  3:38 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-05-09',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E08.22',
              display: 'Diabetes mellitus due to underlying condition with diabetic chronic kidney disease',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8801005',
              display: 'Secondary diabetes mellitus (disorder)',
              userSelected: false
            }
          ],
          text: 'Diabetes mellitus due to underlying condition with diabetic chronic kidney disease'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-05-09T15:38:50.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d40286563',
      resource: {
        resourceType: 'Condition',
        id: 'd40286563',
        meta: {
          versionId: '40286563',
          lastUpdated: '2019-05-09T15:44:46.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Freetext Diagnosis</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Feb  4, 2019  1:51 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-02-04',
        code: {
          text: 'Freetext Diagnosis'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-02-04T13:51:49.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p9973997',
      resource: {
        resourceType: 'Condition',
        id: 'p9973997',
        meta: {
          versionId: '9973997',
          lastUpdated: '2019-01-08T18:29:34.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Disorder of lung</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  8, 2019</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-01-08',
        code: {
          text: 'Disorder of lung'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2019-01-08'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44214559',
      resource: {
        resourceType: 'Condition',
        id: 'd44214559',
        meta: {
          versionId: '44214559',
          lastUpdated: '2020-01-10T16:31:49.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Acute right heart failure, Acute right heart failure</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  7, 2019  8:46 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4453906'
        },
        asserter: {
          reference: 'Practitioner/4554007',
          display: 'JUX, PW'
        },
        dateRecorded: '2020-01-10',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'I50.811',
              display: 'Acute right heart failure',
              userSelected: true
            }
          ],
          text: 'Acute right heart failure'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        onsetDateTime: '2019-11-07T20:46:20.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d45214557',
      resource: {
        resourceType: 'Condition',
        id: 'd45214557',
        meta: {
          versionId: '45214557',
          lastUpdated: '2020-03-06T13:56:46.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Acute right heart failure, Acute right heart failure</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Mar  6, 2020  6:00 A.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4554007',
          display: 'JUX, PW'
        },
        dateRecorded: '2020-03-06',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'I50.811',
              display: 'Acute right heart failure',
              userSelected: true
            }
          ],
          text: 'Acute right heart failure'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        onsetDateTime: '2020-03-06T06:00:00.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43874555',
      resource: {
        resourceType: 'Condition',
        id: 'd43874555',
        meta: {
          versionId: '43874555',
          lastUpdated: '2019-12-16T16:13:23.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Acute right heart failure, Acute right heart failure</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Nov  7, 2019  8:46 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/2042017',
          display: 'Generated Domain User for 0'
        },
        dateRecorded: '2019-12-16',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'I50.811',
              display: 'Acute right heart failure',
              userSelected: true
            }
          ],
          text: 'Acute right heart failure'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        onsetDateTime: '2019-11-07T20:46:20.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p9974005',
      resource: {
        resourceType: 'Condition',
        id: 'p9974005',
        meta: {
          versionId: '9974005',
          lastUpdated: '2019-01-08T18:30:02.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Disorder of lung</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  8, 2019</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-01-08',
        code: {
          text: 'Disorder of lung'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2019-01-08'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p9949911',
      resource: {
        resourceType: 'Condition',
        id: 'p9949911',
        meta: {
          versionId: '9949911',
          lastUpdated: '2019-01-07T20:41:52.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Disorder of lung</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  7, 2019</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-01-07',
        code: {
          text: 'Disorder of lung'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2019-01-07'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44350585',
      resource: {
        resourceType: 'Condition',
        id: 'd44350585',
        meta: {
          versionId: '44350589',
          lastUpdated: '2020-01-21T21:52:11.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Angina pectoris, unspecified, Angina pectoris, unspecified</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Jan 21, 2020  9:48 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-01-21',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'I20.9',
              display: 'Angina pectoris, unspecified',
              userSelected: true
            }
          ],
          text: 'Angina pectoris, unspecified'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-01-21T21:48:37.000Z',
        notes: 'Juxly Documentation DOS: 01-21-2020   <br />Monitoring: Poorly-Controlled<br />Evaluation: Lab Tests Reviewed<br />Assessment: Poorly Controlled on Meds<br />Treatment: Discussed Ordered Treatment<br />          ---'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44350569',
      resource: {
        resourceType: 'Condition',
        id: 'd44350569',
        meta: {
          versionId: '44350577',
          lastUpdated: '2020-01-21T21:35:40.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Angina pectoris, unspecified, Angina pectoris, unspecified</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Jan 21, 2020  9:34 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-01-21',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'I20.9',
              display: 'Angina pectoris, unspecified',
              userSelected: true
            }
          ],
          text: 'Angina pectoris, unspecified'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-01-21T21:34:00.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44422557',
      resource: {
        resourceType: 'Condition',
        id: 'd44422557',
        meta: {
          versionId: '45258559',
          lastUpdated: '2020-03-10T01:58:13.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Angina pectoris, unspecified, Angina pectoris, unspecified</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Jan 28, 2020  9:06 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-01-28',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'I20.9',
              display: 'Angina pectoris, unspecified',
              userSelected: true
            }
          ],
          text: 'Angina pectoris, unspecified'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-01-28T21:06:32.000Z',
        notes: 'Juxly Documentation DOS: 01-28-2020   <br />Monitoring: Responding<br />Evaluation: Lab Tests Reviewed<br />Assessment: Poorly Controlled on Meds<br />Treatment: Treatment Ordered<br />          ---'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44350603',
      resource: {
        resourceType: 'Condition',
        id: 'd44350603',
        meta: {
          versionId: '44350607',
          lastUpdated: '2020-01-21T23:22:28.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Angina pectoris, unspecified, Angina pectoris, unspecified</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Jan 21, 2020 11:03 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-01-21',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'I20.9',
              display: 'Angina pectoris, unspecified',
              userSelected: true
            }
          ],
          text: 'Angina pectoris, unspecified'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-01-21T23:03:40.000Z',
        notes: 'Juxly Documentation DOS: 01-21-2020   <br />Monitoring: Progressing<br />Evaluation: X-rays Reviewed<br />Assessment: Well-Controlled on Meds<br />Treatment: Discussed Ordered Treatment<br />          ---'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d40822577',
      resource: {
        resourceType: 'Condition',
        id: 'd40822577',
        meta: {
          versionId: '44162567',
          lastUpdated: '2020-01-08T16:13:18.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Solitary plasmacytoma in relapse, Solitary plasmacytoma in relapse</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr  3, 2019  4:06 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4554007',
          display: 'JUX, PW'
        },
        dateRecorded: '2019-04-03',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'C90.32',
              display: 'Solitary plasmacytoma in relapse',
              userSelected: true
            }
          ],
          text: 'Solitary plasmacytoma in relapse'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-03T16:06:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p10066245',
      resource: {
        resourceType: 'Condition',
        id: 'p10066245',
        meta: {
          versionId: '10066245',
          lastUpdated: '2019-01-12T22:18:35.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Freetext Condition</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  1, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/2042017',
          display: 'Generated Domain User for 0'
        },
        dateRecorded: '2019-01-12',
        code: {
          text: 'Freetext Condition'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2017-01-01'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44430563',
      resource: {
        resourceType: 'Condition',
        id: 'd44430563',
        meta: {
          versionId: '44430565',
          lastUpdated: '2020-01-29T17:30:27.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Diabetes insipidus, Diabetes insipidus</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Jan 29, 2020  5:30 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-01-29',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E23.2',
              display: 'Diabetes insipidus',
              userSelected: true
            }
          ],
          text: 'Diabetes insipidus'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-01-29T17:30:16.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p9965869',
      resource: {
        resourceType: 'Condition',
        id: 'p9965869',
        meta: {
          versionId: '9965869',
          lastUpdated: '2019-01-08T12:43:52.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Disorder of lung</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  8, 2019</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-01-08',
        code: {
          text: 'Disorder of lung'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2019-01-08'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p7038245',
      resource: {
        resourceType: 'Condition',
        id: 'p7038245',
        meta: {
          versionId: '7741867',
          lastUpdated: '2018-02-28T18:05:25.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Chicken breast, Pectus carinatum (disorder)</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: Feb 28, 2018</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2017-08-01',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '38774000',
              display: 'Pectus carinatum (disorder)',
              userSelected: false
            }
          ],
          text: 'Chicken breast'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'confirmed',
        abatementDateTime: '2018-02-28'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p7042057',
      resource: {
        resourceType: 'Condition',
        id: 'p7042057',
        meta: {
          versionId: '7958203',
          lastUpdated: '2018-04-05T17:09:52.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Chicken breast, Pectus carinatum (disorder)</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Resolved</b>: False</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2017-08-02',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '38774000',
              display: 'Pectus carinatum (disorder)',
              userSelected: false
            }
          ],
          text: 'Chicken breast'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        verificationStatus: 'entered-in-error',
        abatementBoolean: false
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p7038253',
      resource: {
        resourceType: 'Condition',
        id: 'p7038253',
        meta: {
          versionId: '8645903',
          lastUpdated: '2018-06-19T20:56:02.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Chicken breast, Pectus carinatum (disorder)</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Resolved</b>: False</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2017-08-01',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '38774000',
              display: 'Pectus carinatum (disorder)',
              userSelected: false
            }
          ],
          text: 'Chicken breast'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        verificationStatus: 'entered-in-error',
        abatementBoolean: false
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p7038269',
      resource: {
        resourceType: 'Condition',
        id: 'p7038269',
        meta: {
          versionId: '7958211',
          lastUpdated: '2018-04-05T17:10:00.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Chicken breast, Pectus carinatum (disorder)</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Resolved</b>: False</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2017-08-01',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '38774000',
              display: 'Pectus carinatum (disorder)',
              userSelected: false
            }
          ],
          text: 'Chicken breast'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        verificationStatus: 'entered-in-error',
        abatementBoolean: false
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p7042073',
      resource: {
        resourceType: 'Condition',
        id: 'p7042073',
        meta: {
          versionId: '8645899',
          lastUpdated: '2018-06-19T20:56:00.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Congenital chicken breast, Pectus carinatum (disorder)</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Resolved</b>: False</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2017-08-02',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '38774000',
              display: 'Pectus carinatum (disorder)',
              userSelected: false
            }
          ],
          text: 'Congenital chicken breast'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        verificationStatus: 'entered-in-error',
        abatementBoolean: false
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p7038261',
      resource: {
        resourceType: 'Condition',
        id: 'p7038261',
        meta: {
          versionId: '7958207',
          lastUpdated: '2018-04-05T17:09:56.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Chicken breast, Pectus carinatum (disorder)</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Resolved</b>: False</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2017-08-01',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '38774000',
              display: 'Pectus carinatum (disorder)',
              userSelected: false
            }
          ],
          text: 'Chicken breast'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        verificationStatus: 'entered-in-error',
        abatementBoolean: false
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p7042065',
      resource: {
        resourceType: 'Condition',
        id: 'p7042065',
        meta: {
          versionId: '7958199',
          lastUpdated: '2018-04-05T17:09:49.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Chicken breast, Pectus carinatum (disorder)</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Resolved</b>: False</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2017-08-02',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '38774000',
              display: 'Pectus carinatum (disorder)',
              userSelected: false
            }
          ],
          text: 'Chicken breast'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        verificationStatus: 'entered-in-error',
        abatementBoolean: false
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d42238555',
      resource: {
        resourceType: 'Condition',
        id: 'd42238555',
        meta: {
          versionId: '42238557',
          lastUpdated: '2019-08-14T19:38:53.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Inhalant abuse with inhalant-induced dementia, Inhalant abuse with inhalant-induced dementia</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Aug 14, 2019  7:36 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4554007',
          display: 'JUX, PW'
        },
        dateRecorded: '2019-08-14',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F18.17',
              display: 'Inhalant abuse with inhalant-induced dementia',
              userSelected: true
            }
          ],
          text: 'Inhalant abuse with inhalant-induced dementia'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-08-14T19:36:08.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p9973981',
      resource: {
        resourceType: 'Condition',
        id: 'p9973981',
        meta: {
          versionId: '9973981',
          lastUpdated: '2019-01-08T18:27:14.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Disorder of lung</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  8, 2019</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-01-08',
        code: {
          text: 'Disorder of lung'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2019-01-08'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p9974029',
      resource: {
        resourceType: 'Condition',
        id: 'p9974029',
        meta: {
          versionId: '9974029',
          lastUpdated: '2019-01-08T18:31:50.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Disorder of lung</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  8, 2019</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-01-08',
        code: {
          text: 'Disorder of lung'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2019-01-08'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p10449917',
      resource: {
        resourceType: 'Condition',
        id: 'p10449917',
        meta: {
          versionId: '10449917',
          lastUpdated: '2019-02-07T16:59:29.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Poisoning by oxytocin, Poisoning by oxytocin (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/2042017',
          display: 'Generated Domain User for 0'
        },
        dateRecorded: '2019-02-07',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '276008',
              display: 'Poisoning by oxytocin (disorder)',
              userSelected: false
            }
          ],
          text: 'Poisoning by oxytocin'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        abatementBoolean: false
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p10449909',
      resource: {
        resourceType: 'Condition',
        id: 'p10449909',
        meta: {
          versionId: '10449909',
          lastUpdated: '2019-02-07T16:59:29.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Poisoning by oxytocin, Poisoning by oxytocin (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/2042017',
          display: 'Generated Domain User for 0'
        },
        dateRecorded: '2019-02-07',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '276008',
              display: 'Poisoning by oxytocin (disorder)',
              userSelected: false
            }
          ],
          text: 'Poisoning by oxytocin'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        abatementBoolean: false
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d39274559',
      resource: {
        resourceType: 'Condition',
        id: 'd39274559',
        meta: {
          versionId: '43586567',
          lastUpdated: '2019-11-18T15:59:48.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Type 1 diabetes mellitus with hyperglycemia, Type 1 diabetes mellitus with hyperglycemia</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 13, 2018  7:53 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2018-09-13',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E10.65',
              display: 'Type 1 diabetes mellitus with hyperglycemia',
              userSelected: true
            }
          ],
          text: 'Type 1 diabetes mellitus with hyperglycemia'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2018-09-13T19:53:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d39270561',
      resource: {
        resourceType: 'Condition',
        id: 'd39270561',
        meta: {
          versionId: '39270561',
          lastUpdated: '2019-04-03T16:05:53.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Type 1 diabetes mellitus with hyperglycemia, Type 1 diabetes mellitus with hyperglycemia</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 13, 2018  7:53 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4554007',
          display: 'JUX, PW'
        },
        dateRecorded: '2018-09-13',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E10.65',
              display: 'Type 1 diabetes mellitus with hyperglycemia',
              userSelected: true
            }
          ],
          text: 'Type 1 diabetes mellitus with hyperglycemia'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2018-09-13T19:53:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44350567',
      resource: {
        resourceType: 'Condition',
        id: 'd44350567',
        meta: {
          versionId: '44350575',
          lastUpdated: '2020-01-21T21:35:37.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Morbid (severe) obesity due to excess calories, Morbid (severe) obesity due to excess calories</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Jan 21, 2020  9:33 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-01-21',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E66.01',
              display: 'Morbid (severe) obesity due to excess calories',
              userSelected: true
            }
          ],
          text: 'Morbid (severe) obesity due to excess calories'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-01-21T21:33:52.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44350599',
      resource: {
        resourceType: 'Condition',
        id: 'd44350599',
        meta: {
          versionId: '44350601',
          lastUpdated: '2020-01-21T23:01:41.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Morbid (severe) obesity due to excess calories, Morbid (severe) obesity due to excess calories</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Jan 21, 2020 11:01 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-01-21',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E66.01',
              display: 'Morbid (severe) obesity due to excess calories',
              userSelected: true
            }
          ],
          text: 'Morbid (severe) obesity due to excess calories'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-01-21T23:01:07.000Z',
        notes: 'Juxly Documentation DOS: 01-21-2020   <br />Monitoring: Responding<br />Assessment: Poorly Controlled on Meds<br />Treatment: Discussed Ordered Treatment, Discussed Alcohol Intake<br />          ---'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44350611',
      resource: {
        resourceType: 'Condition',
        id: 'd44350611',
        meta: {
          versionId: '44422555',
          lastUpdated: '2020-01-28T21:06:28.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Morbid (severe) obesity due to excess calories, Morbid (severe) obesity due to excess calories</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Jan 22, 2020 12:44 A.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-01-22',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E66.01',
              display: 'Morbid (severe) obesity due to excess calories',
              userSelected: true
            }
          ],
          text: 'Morbid (severe) obesity due to excess calories'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-01-22T00:44:01.000Z',
        notes: 'Juxly Documentation DOS: 01-21-2020   <br />Monitoring: Poorly-Controlled<br />Evaluation: Med Records Reviewed<br />Assessment: Uncontrolled on Meds<br />Treatment: Discussed Ordered Treatment<br />          ---'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44514567',
      resource: {
        resourceType: 'Condition',
        id: 'd44514567',
        meta: {
          versionId: '45258565',
          lastUpdated: '2020-03-10T01:58:19.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Morbid (severe) obesity due to excess calories, Morbid (severe) obesity due to excess calories</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Feb  3, 2020  8:36 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-02-03',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E66.01',
              display: 'Morbid (severe) obesity due to excess calories',
              userSelected: true
            }
          ],
          text: 'Morbid (severe) obesity due to excess calories'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-02-03T20:36:10.000Z',
        notes: 'Juxly Documentation DOS: 02-03-2020   <br />Monitoring: Uncontrolled<br />Evaluation: X-rays Reviewed<br />Assessment: Well-Controlled on Meds<br />Treatment: Discussed Risks and Benefits of Treatment<br />          ---'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44350579',
      resource: {
        resourceType: 'Condition',
        id: 'd44350579',
        meta: {
          versionId: '44350581',
          lastUpdated: '2020-01-21T21:40:33.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Morbid (severe) obesity due to excess calories, Morbid (severe) obesity due to excess calories</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Jan 21, 2020  9:40 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-01-21',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E66.01',
              display: 'Morbid (severe) obesity due to excess calories',
              userSelected: true
            }
          ],
          text: 'Morbid (severe) obesity due to excess calories'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-01-21T21:40:00.000Z',
        notes: 'Juxly Documentation DOS: 01-21-2020   <br />Monitoring: Controlled<br />Evaluation: Med Records Reviewed<br />Assessment: Poorly Controlled on Meds<br />Treatment: Treatment Ordered<br />          ---'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44514563',
      resource: {
        resourceType: 'Condition',
        id: 'd44514563',
        meta: {
          versionId: '44514565',
          lastUpdated: '2020-02-03T20:32:28.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Morbid (severe) obesity due to excess calories, Morbid (severe) obesity due to excess calories</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Feb  3, 2020  8:32 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-02-03',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E66.01',
              display: 'Morbid (severe) obesity due to excess calories',
              userSelected: true
            }
          ],
          text: 'Morbid (severe) obesity due to excess calories'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-02-03T20:32:07.000Z',
        notes: 'Juxly Documentation DOS: 02-03-2020   <br />Monitoring: Uncontrolled, Deteriorating<br />Evaluation: X-rays Reviewed<br />Assessment: Uncontrolled on Meds<br />Treatment: Patient Referred for Treatment<br />          ---'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44350605',
      resource: {
        resourceType: 'Condition',
        id: 'd44350605',
        meta: {
          versionId: '44350609',
          lastUpdated: '2020-01-21T23:22:30.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Morbid (severe) obesity due to excess calories, Morbid (severe) obesity due to excess calories</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Jan 21, 2020 11:22 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-01-21',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E66.01',
              display: 'Morbid (severe) obesity due to excess calories',
              userSelected: true
            }
          ],
          text: 'Morbid (severe) obesity due to excess calories'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-01-21T23:22:02.000Z',
        notes: 'Juxly Documentation DOS: 01-21-2020   <br />Monitoring: Responding<br />Evaluation: Lab Tests Reviewed<br />Assessment: Poorly Controlled on Meds<br />Treatment: Treatment Ordered<br />          ---'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44350583',
      resource: {
        resourceType: 'Condition',
        id: 'd44350583',
        meta: {
          versionId: '44350587',
          lastUpdated: '2020-01-21T21:52:10.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Morbid (severe) obesity due to excess calories, Morbid (severe) obesity due to excess calories</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Jan 21, 2020  9:44 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-01-21',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E66.01',
              display: 'Morbid (severe) obesity due to excess calories',
              userSelected: true
            }
          ],
          text: 'Morbid (severe) obesity due to excess calories'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-01-21T21:44:50.000Z',
        notes: 'Juxly Documentation DOS: 01-21-2020   <br />Monitoring: Responding<br />Evaluation: X-rays Reviewed<br />Assessment: Poorly Controlled on Meds<br />Treatment: Discussed Ordered X-rays, Discussed Alcohol Intake<br />          ---'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d42850615',
      resource: {
        resourceType: 'Condition',
        id: 'd42850615',
        meta: {
          versionId: '44162557',
          lastUpdated: '2020-01-08T16:12:52.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Gonococcal sepsis, Gonococcal sepsis</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 26, 2019  6:19 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-09-26',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'A54.86',
              display: 'Gonococcal sepsis',
              userSelected: true
            }
          ],
          text: 'Gonococcal sepsis'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-09-26T18:19:42.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d42850607',
      resource: {
        resourceType: 'Condition',
        id: 'd42850607',
        meta: {
          versionId: '42850609',
          lastUpdated: '2019-09-26T18:16:22.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Gonococcal sepsis, Gonococcal sepsis</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 26, 2019  6:01 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-09-26',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'A54.86',
              display: 'Gonococcal sepsis',
              userSelected: true
            }
          ],
          text: 'Gonococcal sepsis'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-09-26T18:01:01.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44514559',
      resource: {
        resourceType: 'Condition',
        id: 'd44514559',
        meta: {
          versionId: '44514561',
          lastUpdated: '2020-02-03T20:31:39.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Malignant neoplasm of axillary tail of unspecified male breast, Malignant neoplasm of axillary tail of unspecified male breast</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Feb  3, 2020  8:31 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-02-03',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'C50.629',
              display: 'Malignant neoplasm of axillary tail of unspecified male breast',
              userSelected: true
            }
          ],
          text: 'Malignant neoplasm of axillary tail of unspecified male breast'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-02-03T20:31:16.000Z',
        notes: 'Juxly Documentation DOS: 02-03-2020   <br />Monitoring: Controlled<br />Evaluation: X-rays Reviewed<br />Assessment: Poorly Controlled on Meds<br />Treatment: Discussed Ordered Treatment<br />          ---'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p10070893',
      resource: {
        resourceType: 'Condition',
        id: 'p10070893',
        meta: {
          versionId: '10070893',
          lastUpdated: '2019-01-13T21:47:58.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: COPD Condition by ZeOmega</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  1, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/2042017',
          display: 'Generated Domain User for 0'
        },
        dateRecorded: '2019-01-13',
        code: {
          text: 'COPD Condition by ZeOmega'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2017-01-01'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p9974013',
      resource: {
        resourceType: 'Condition',
        id: 'p9974013',
        meta: {
          versionId: '9974013',
          lastUpdated: '2019-01-08T18:31:16.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Disorder of lung</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  8, 2019</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-01-08',
        code: {
          text: 'Disorder of lung'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2019-01-08'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41202607',
      resource: {
        resourceType: 'Condition',
        id: 'd41202607',
        meta: {
          versionId: '43586573',
          lastUpdated: '2019-11-18T16:00:15.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Hallucinogen use, unspecified with hallucinogen-induced anxiety disorder, Hallucinogen use, unspecified with hallucinogen-induced anxiety disorder</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: May  9, 2019  4:47 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-05-09',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F16.980',
              display: 'Hallucinogen use, unspecified with hallucinogen-induced anxiety disorder',
              userSelected: true
            }
          ],
          text: 'Hallucinogen use, unspecified with hallucinogen-induced anxiety disorder'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-05-09T16:47:17.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44390555',
      resource: {
        resourceType: 'Condition',
        id: 'd44390555',
        meta: {
          versionId: '44518573',
          lastUpdated: '2020-02-03T21:30:57.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Gastrostomy status, Gastrostomy status</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Jan 26, 2020  9:26 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-01-26',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'Z93.1',
              display: 'Gastrostomy status',
              userSelected: true
            }
          ],
          text: 'Gastrostomy status'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-01-26T21:26:01.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p10066661',
      resource: {
        resourceType: 'Condition',
        id: 'p10066661',
        meta: {
          versionId: '10066661',
          lastUpdated: '2019-01-12T23:38:37.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: COPD Condition by ZeOmega</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  1, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/2042017',
          display: 'Generated Domain User for 0'
        },
        dateRecorded: '2019-01-12',
        code: {
          text: 'COPD Condition by ZeOmega'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2017-01-01'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43882555',
      resource: {
        resourceType: 'Condition',
        id: 'd43882555',
        meta: {
          versionId: '44162563',
          lastUpdated: '2020-01-08T16:13:04.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Acute on chronic right heart failure, Acute on chronic right heart failure</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Dec 17, 2019  1:35 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-17',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'I50.813',
              display: 'Acute on chronic right heart failure',
              userSelected: true
            }
          ],
          text: 'Acute on chronic right heart failure'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-12-17T13:35:40.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p11345861',
      resource: {
        resourceType: 'Condition',
        id: 'p11345861',
        meta: {
          versionId: '11345861',
          lastUpdated: '2019-04-24T12:33:19.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Gout, Gout (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4554007',
          display: 'JUX, PW'
        },
        dateRecorded: '2019-04-24',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '90560007',
              display: 'Gout (disorder)',
              userSelected: true
            }
          ],
          text: 'Gout'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        abatementBoolean: false
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43990561',
      resource: {
        resourceType: 'Condition',
        id: 'd43990561',
        meta: {
          versionId: '43990569',
          lastUpdated: '2019-12-23T15:54:52.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Type 2 diabetes mellitus with proliferative diabetic retinopathy with traction retinal detachment involving the macula, unspecified eye, Type 2 diabetes mellitus with proliferative diabetic retinopathy with traction retinal detachment involving the macula, unspecified eye</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Dec 23, 2019  3:54 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-23',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E11.3529',
              display: 'Type 2 diabetes mellitus with proliferative diabetic retinopathy with traction retinal detachment involving the macula, unspecified eye',
              userSelected: true
            }
          ],
          text: 'Type 2 diabetes mellitus with proliferative diabetic retinopathy with traction retinal detachment involving the macula, unspecified eye'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-12-23T15:54:27.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44514555',
      resource: {
        resourceType: 'Condition',
        id: 'd44514555',
        meta: {
          versionId: '44514557',
          lastUpdated: '2020-02-03T20:25:07.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Malignant neoplasm of parathyroid gland, Malignant neoplasm of parathyroid gland</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Feb  3, 2020  8:24 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-02-03',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'C75.0',
              display: 'Malignant neoplasm of parathyroid gland',
              userSelected: true
            }
          ],
          text: 'Malignant neoplasm of parathyroid gland'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-02-03T20:24:53.000Z',
        notes: 'Juxly Documentation DOS: 02-03-2020   <br />Monitoring: Responding<br />Evaluation: X-rays Reviewed<br />Assessment: Controlled on Meds<br />Treatment: Discussed Ordered Treatment<br />          ---'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44434559',
      resource: {
        resourceType: 'Condition',
        id: 'd44434559',
        meta: {
          versionId: '44434561',
          lastUpdated: '2020-01-29T19:04:52.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Unspecified atrial fibrillation, Unspecified atrial fibrillation</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Jan 29, 2020  7:04 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-01-29',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'I48.91',
              display: 'Unspecified atrial fibrillation',
              userSelected: true
            }
          ],
          text: 'Unspecified atrial fibrillation'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-01-29T19:04:40.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p12145929',
      resource: {
        resourceType: 'Condition',
        id: 'p12145929',
        meta: {
          versionId: '12145929',
          lastUpdated: '2019-07-03T16:05:53.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: CHF (congestive heart failure), CHF (congestive heart failure)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-07-03',
        code: {
          coding: [
            {
              system: 'http://e-imo.com/products/problem-it',
              code: '45668',
              display: 'CHF (congestive heart failure)',
              userSelected: false
            },
            {
              system: 'http://snomed.info/sct',
              code: '42343007',
              display: 'Congestive heart failure (disorder)',
              userSelected: false
            }
          ],
          text: 'CHF (congestive heart failure)'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        abatementBoolean: false
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p12145921',
      resource: {
        resourceType: 'Condition',
        id: 'p12145921',
        meta: {
          versionId: '12145921',
          lastUpdated: '2019-07-03T15:51:24.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Alcohol abuse, Alcohol abuse (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-07-03',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '15167005',
              display: 'Alcohol abuse (disorder)',
              userSelected: false
            }
          ],
          text: 'Alcohol abuse'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        abatementBoolean: false
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d39794555',
      resource: {
        resourceType: 'Condition',
        id: 'd39794555',
        meta: {
          versionId: '39794555',
          lastUpdated: '2018-12-04T20:18:01.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Anxiety disorder, unspecified, Anxiety disorder, unspecified</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Dec  4, 2018  6:00 A.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4646008',
          display: 'SWL, PW'
        },
        dateRecorded: '2018-12-04',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F41.9',
              display: 'Anxiety disorder, unspecified',
              userSelected: true
            }
          ],
          text: 'Anxiety disorder, unspecified'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        onsetDateTime: '2018-12-04T06:00:00.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p11209871',
      resource: {
        resourceType: 'Condition',
        id: 'p11209871',
        meta: {
          versionId: '11209871',
          lastUpdated: '2019-04-15T15:37:14.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Resolved</b>: False</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4554007',
          display: 'JUX, PW'
        },
        dateRecorded: '2019-04-15',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        abatementBoolean: false
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d42162563',
      resource: {
        resourceType: 'Condition',
        id: 'd42162563',
        meta: {
          versionId: '43586569',
          lastUpdated: '2019-11-18T15:59:58.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Aug  9, 2019  3:31 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-08-09',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-08-09T15:31:48.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41032493',
      resource: {
        resourceType: 'Condition',
        id: 'd41032493',
        meta: {
          versionId: '41032497',
          lastUpdated: '2019-04-18T21:10:03.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 18, 2019  9:09 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-18',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-18T21:09:14.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41138565',
      resource: {
        resourceType: 'Condition',
        id: 'd41138565',
        meta: {
          versionId: '41138567',
          lastUpdated: '2019-05-02T21:18:14.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: May  2, 2019  9:17 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4554007',
          display: 'JUX, PW'
        },
        dateRecorded: '2019-05-02',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-05-02T21:17:53.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44018555',
      resource: {
        resourceType: 'Condition',
        id: 'd44018555',
        meta: {
          versionId: '44162555',
          lastUpdated: '2020-01-08T16:12:49.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Dec 26, 2019  9:33 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-26',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-12-26T21:33:49.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41034559',
      resource: {
        resourceType: 'Condition',
        id: 'd41034559',
        meta: {
          versionId: '41034561',
          lastUpdated: '2019-04-19T13:03:37.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 19, 2019  1:02 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-19',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-19T13:02:24.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41034605',
      resource: {
        resourceType: 'Condition',
        id: 'd41034605',
        meta: {
          versionId: '41034607',
          lastUpdated: '2019-04-19T14:57:30.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 19, 2019  2:57 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-19',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-19T14:57:23.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d40966555',
      resource: {
        resourceType: 'Condition',
        id: 'd40966555',
        meta: {
          versionId: '40982555',
          lastUpdated: '2019-04-16T00:17:40.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 15, 2019  6:00 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-15',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-15T18:00:18.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d40982557',
      resource: {
        resourceType: 'Condition',
        id: 'd40982557',
        meta: {
          versionId: '41026555',
          lastUpdated: '2019-04-18T18:47:40.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 16, 2019 12:17 A.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4554007',
          display: 'JUX, PW'
        },
        dateRecorded: '2019-04-16',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-16T00:17:48.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41034597',
      resource: {
        resourceType: 'Condition',
        id: 'd41034597',
        meta: {
          versionId: '41034601',
          lastUpdated: '2019-04-19T14:56:14.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 19, 2019  2:21 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-19',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-19T14:21:32.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41034589',
      resource: {
        resourceType: 'Condition',
        id: 'd41034589',
        meta: {
          versionId: '41034591',
          lastUpdated: '2019-04-19T13:57:52.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 19, 2019  1:57 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-19',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-19T13:57:47.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41034593',
      resource: {
        resourceType: 'Condition',
        id: 'd41034593',
        meta: {
          versionId: '41034595',
          lastUpdated: '2019-04-19T14:21:07.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 19, 2019  2:15 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-19',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-19T14:15:23.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41038559',
      resource: {
        resourceType: 'Condition',
        id: 'd41038559',
        meta: {
          versionId: '41046557',
          lastUpdated: '2019-04-19T19:29:59.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 19, 2019  3:40 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-19',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-19T15:40:48.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41034577',
      resource: {
        resourceType: 'Condition',
        id: 'd41034577',
        meta: {
          versionId: '41034579',
          lastUpdated: '2019-04-19T13:22:19.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 19, 2019  1:19 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-19',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-19T13:19:46.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41202555',
      resource: {
        resourceType: 'Condition',
        id: 'd41202555',
        meta: {
          versionId: '41202555',
          lastUpdated: '2019-05-09T14:47:50.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: May  9, 2019  2:41 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-05-09',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-05-09T14:41:33.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41034573',
      resource: {
        resourceType: 'Condition',
        id: 'd41034573',
        meta: {
          versionId: '41034575',
          lastUpdated: '2019-04-19T13:19:04.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 19, 2019  1:18 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-19',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-19T13:18:51.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41032485',
      resource: {
        resourceType: 'Condition',
        id: 'd41032485',
        meta: {
          versionId: '41032487',
          lastUpdated: '2019-04-18T21:08:17.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 18, 2019  9:08 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-18',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-18T21:08:01.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41034555',
      resource: {
        resourceType: 'Condition',
        id: 'd41034555',
        meta: {
          versionId: '41034557',
          lastUpdated: '2019-04-19T13:01:34.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 19, 2019  1:01 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-19',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-19T13:01:20.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41034585',
      resource: {
        resourceType: 'Condition',
        id: 'd41034585',
        meta: {
          versionId: '41034587',
          lastUpdated: '2019-04-19T13:55:37.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 19, 2019  1:55 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-19',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-19T13:55:26.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41198555',
      resource: {
        resourceType: 'Condition',
        id: 'd41198555',
        meta: {
          versionId: '41198555',
          lastUpdated: '2019-05-08T20:56:01.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: May  8, 2019  8:45 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-05-08',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-05-08T20:45:02.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41202557',
      resource: {
        resourceType: 'Condition',
        id: 'd41202557',
        meta: {
          versionId: '41202557',
          lastUpdated: '2019-05-09T14:50:33.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: May  9, 2019  2:50 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-05-09',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-05-09T14:50:13.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41202577',
      resource: {
        resourceType: 'Condition',
        id: 'd41202577',
        meta: {
          versionId: '41202577',
          lastUpdated: '2019-05-09T16:46:05.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: May  9, 2019  3:40 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-05-09',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-05-09T15:40:56.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41198559',
      resource: {
        resourceType: 'Condition',
        id: 'd41198559',
        meta: {
          versionId: '41198559',
          lastUpdated: '2019-05-08T21:50:51.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: May  8, 2019  9:37 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-05-08',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-05-08T21:37:40.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41034567',
      resource: {
        resourceType: 'Condition',
        id: 'd41034567',
        meta: {
          versionId: '41034569',
          lastUpdated: '2019-04-19T13:12:22.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 19, 2019  1:12 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-19',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-19T13:12:15.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41198557',
      resource: {
        resourceType: 'Condition',
        id: 'd41198557',
        meta: {
          versionId: '41198557',
          lastUpdated: '2019-05-08T21:35:45.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: May  8, 2019  9:13 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-05-08',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-05-08T21:13:32.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41032479',
      resource: {
        resourceType: 'Condition',
        id: 'd41032479',
        meta: {
          versionId: '41032479',
          lastUpdated: '2019-04-18T21:05:30.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 18, 2019  8:59 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-18',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-18T20:59:00.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41034581',
      resource: {
        resourceType: 'Condition',
        id: 'd41034581',
        meta: {
          versionId: '41034583',
          lastUpdated: '2019-04-19T13:23:08.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 19, 2019  1:23 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-19',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-19T13:23:04.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41202571',
      resource: {
        resourceType: 'Condition',
        id: 'd41202571',
        meta: {
          versionId: '41202571',
          lastUpdated: '2019-05-09T15:40:40.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: May  9, 2019  3:37 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-05-09',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-05-09T15:37:56.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41034563',
      resource: {
        resourceType: 'Condition',
        id: 'd41034563',
        meta: {
          versionId: '41034565',
          lastUpdated: '2019-04-19T13:06:22.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 19, 2019  1:06 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-19',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-19T13:06:17.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d42018555',
      resource: {
        resourceType: 'Condition',
        id: 'd42018555',
        meta: {
          versionId: '42018557',
          lastUpdated: '2019-07-26T17:51:32.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Jul 26, 2019  5:51 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-07-26',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-07-26T17:51:18.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41038555',
      resource: {
        resourceType: 'Condition',
        id: 'd41038555',
        meta: {
          versionId: '41038557',
          lastUpdated: '2019-04-19T15:37:52.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Apr 19, 2019  3:26 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-04-19',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-04-19T15:26:42.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d41202605',
      resource: {
        resourceType: 'Condition',
        id: 'd41202605',
        meta: {
          versionId: '41202605',
          lastUpdated: '2019-05-09T19:25:46.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced sexual dysfunction, Cocaine use, unspecified with cocaine-induced sexual dysfunction</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: May  9, 2019  4:47 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-05-09',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.981',
              display: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction',
              userSelected: true
            },
            {
              system: 'http://snomed.info/sct',
              code: '8686000',
              display: 'Cocaine-induced sexual dysfunction (finding)',
              userSelected: false
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced sexual dysfunction'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-05-09T16:47:05.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43990559',
      resource: {
        resourceType: 'Condition',
        id: 'd43990559',
        meta: {
          versionId: '43990565',
          lastUpdated: '2019-12-23T15:54:44.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Type 2 diabetes mellitus with proliferative diabetic retinopathy without macular edema, unspecified eye, Type 2 diabetes mellitus with proliferative diabetic retinopathy without macular edema, unspecified eye</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Dec 23, 2019  3:53 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-12-23',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E11.3599',
              display: 'Type 2 diabetes mellitus with proliferative diabetic retinopathy without macular edema, unspecified eye',
              userSelected: true
            }
          ],
          text: 'Type 2 diabetes mellitus with proliferative diabetic retinopathy without macular edema, unspecified eye'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-12-23T15:53:20.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d44774555',
      resource: {
        resourceType: 'Condition',
        id: 'd44774555',
        meta: {
          versionId: '45258567',
          lastUpdated: '2020-03-10T01:58:20.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Malignant neoplasm of unspecified site of left female breast, Malignant neoplasm of unspecified site of left female breast</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Feb 17, 2020  7:50 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-02-17',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'C50.912',
              display: 'Malignant neoplasm of unspecified site of left female breast',
              userSelected: true
            }
          ],
          text: 'Malignant neoplasm of unspecified site of left female breast'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2020-02-17T19:50:15.000Z',
        notes: 'Juxly Documentation DOS: 02-17-2020   <br />Monitoring: Poorly-Controlled<br />Evaluation: Lab Tests Reviewed<br />Assessment: Controlled on Meds<br />Treatment: Discussed Ordered Treatment<br />          ---'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d42842557',
      resource: {
        resourceType: 'Condition',
        id: 'd42842557',
        meta: {
          versionId: '42842559',
          lastUpdated: '2019-09-26T15:25:09.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Disseminated mycobacterium avium-intracellulare complex (DMAC), Disseminated mycobacterium avium-intracellulare complex (DMAC)</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 26, 2019  3:24 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-09-26',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'A31.2',
              display: 'Disseminated mycobacterium avium-intracellulare complex (DMAC)',
              userSelected: true
            }
          ],
          text: 'Disseminated mycobacterium avium-intracellulare complex (DMAC)'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-09-26T15:24:40.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d42842561',
      resource: {
        resourceType: 'Condition',
        id: 'd42842561',
        meta: {
          versionId: '43990573',
          lastUpdated: '2019-12-23T15:55:03.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Disseminated mycobacterium avium-intracellulare complex (DMAC), Disseminated mycobacterium avium-intracellulare complex (DMAC)</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 26, 2019  3:25 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-09-26',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'A31.2',
              display: 'Disseminated mycobacterium avium-intracellulare complex (DMAC)',
              userSelected: true
            }
          ],
          text: 'Disseminated mycobacterium avium-intracellulare complex (DMAC)'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-09-26T15:25:27.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p10067085',
      resource: {
        resourceType: 'Condition',
        id: 'p10067085',
        meta: {
          versionId: '10067085',
          lastUpdated: '2019-01-13T06:15:27.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: COPD Condition by ZeOmega</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  1, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/2042017',
          display: 'Generated Domain User for 0'
        },
        dateRecorded: '2019-01-13',
        code: {
          text: 'COPD Condition by ZeOmega'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2017-01-01'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d42842555',
      resource: {
        resourceType: 'Condition',
        id: 'd42842555',
        meta: {
          versionId: '44518575',
          lastUpdated: '2020-02-03T21:30:58.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Pulmonary mycobacterial infection, Pulmonary mycobacterial infection</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Sep 26, 2019  3:11 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-09-26',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'A31.0',
              display: 'Pulmonary mycobacterial infection',
              userSelected: true
            }
          ],
          text: 'Pulmonary mycobacterial infection'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-09-26T15:11:03.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d43346555',
      resource: {
        resourceType: 'Condition',
        id: 'd43346555',
        meta: {
          versionId: '43586571',
          lastUpdated: '2019-11-18T16:00:04.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Cocaine use, unspecified with cocaine-induced anxiety disorder, Cocaine use, unspecified with cocaine-induced anxiety disorder</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Nov  1, 2019  9:42 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4554007',
          display: 'JUX, PW'
        },
        dateRecorded: '2019-11-01',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'F14.980',
              display: 'Cocaine use, unspecified with cocaine-induced anxiety disorder',
              userSelected: true
            }
          ],
          text: 'Cocaine use, unspecified with cocaine-induced anxiety disorder'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-11-01T21:42:05.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d40286561',
      resource: {
        resourceType: 'Condition',
        id: 'd40286561',
        meta: {
          versionId: '40286561',
          lastUpdated: '2019-05-09T15:44:50.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Freetext Diagnosis</p><p><b>Verification Status</b>: Entered In Error</p><p><b>Onset</b>: Feb  4, 2019  1:51 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-02-04',
        code: {
          text: 'Freetext Diagnosis'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        verificationStatus: 'entered-in-error',
        onsetDateTime: '2019-02-04T13:51:07.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d45258571',
      resource: {
        resourceType: 'Condition',
        id: 'd45258571',
        meta: {
          versionId: '45258571',
          lastUpdated: '2020-03-10T02:01:13.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Type 2 diabetes mellitus with other specified complication, Type 2 diabetes mellitus with other specified complication</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Mar 10, 2020  2:01 A.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-03-10',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E11.69',
              display: 'Type 2 diabetes mellitus with other specified complication',
              userSelected: true
            }
          ],
          text: 'Type 2 diabetes mellitus with other specified complication'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        onsetDateTime: '2020-03-10T02:01:06.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p6805935',
      resource: {
        resourceType: 'Condition',
        id: 'p6805935',
        meta: {
          versionId: '6805935',
          lastUpdated: '2017-02-22T17:30:51.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Anxiety disorder of childhood OR adolescence, Anxiety disorder of childhood OR adolescence (disorder)</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Provisional</p><p><b>Severity</b>: V</p><p><b>Onset</b>: Feb 22, 2017</p><p><b>Resolved</b>: Feb 22, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2017-02-22',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '109006',
              display: 'Anxiety disorder of childhood OR adolescence (disorder)',
              userSelected: false
            }
          ],
          text: 'Anxiety disorder of childhood OR adolescence'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'provisional',
        severity: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '399166001',
              display: 'Fatal',
              userSelected: false
            }
          ],
          text: 'V'
        },
        onsetDateTime: '2017-02-22',
        abatementDateTime: '2017-02-22'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p6805879',
      resource: {
        resourceType: 'Condition',
        id: 'p6805879',
        meta: {
          versionId: '6805879',
          lastUpdated: '2017-02-22T17:04:55.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Anxiety disorder of childhood OR adolescence, Anxiety disorder of childhood OR adolescence (disorder)</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Provisional</p><p><b>Severity</b>: V</p><p><b>Onset</b>: Feb 22, 2017</p><p><b>Resolved</b>: Feb 22, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2017-02-22',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '109006',
              display: 'Anxiety disorder of childhood OR adolescence (disorder)',
              userSelected: false
            }
          ],
          text: 'Anxiety disorder of childhood OR adolescence'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'provisional',
        severity: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '399166001',
              display: 'Fatal',
              userSelected: false
            }
          ],
          text: 'V'
        },
        onsetDateTime: '2017-02-22',
        abatementDateTime: '2017-02-22'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p6805871',
      resource: {
        resourceType: 'Condition',
        id: 'p6805871',
        meta: {
          versionId: '6805871',
          lastUpdated: '2017-02-22T16:59:53.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Anxiety disorder of childhood OR adolescence, Anxiety disorder of childhood OR adolescence (disorder)</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Provisional</p><p><b>Severity</b>: V</p><p><b>Onset</b>: Feb 22, 2017</p><p><b>Resolved</b>: Feb 22, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2017-02-22',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '109006',
              display: 'Anxiety disorder of childhood OR adolescence (disorder)',
              userSelected: false
            }
          ],
          text: 'Anxiety disorder of childhood OR adolescence'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'provisional',
        severity: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '399166001',
              display: 'Fatal',
              userSelected: false
            }
          ],
          text: 'V'
        },
        onsetDateTime: '2017-02-22',
        abatementDateTime: '2017-02-22'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p6805895',
      resource: {
        resourceType: 'Condition',
        id: 'p6805895',
        meta: {
          versionId: '6805895',
          lastUpdated: '2017-02-22T17:14:10.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Anxiety disorder of childhood OR adolescence, Anxiety disorder of childhood OR adolescence (disorder)</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Provisional</p><p><b>Severity</b>: V</p><p><b>Onset</b>: Feb 22, 2017</p><p><b>Resolved</b>: Feb 22, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2017-02-22',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '109006',
              display: 'Anxiety disorder of childhood OR adolescence (disorder)',
              userSelected: false
            }
          ],
          text: 'Anxiety disorder of childhood OR adolescence'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'provisional',
        severity: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '399166001',
              display: 'Fatal',
              userSelected: false
            }
          ],
          text: 'V'
        },
        onsetDateTime: '2017-02-22',
        abatementDateTime: '2017-02-22'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p6805911',
      resource: {
        resourceType: 'Condition',
        id: 'p6805911',
        meta: {
          versionId: '6805911',
          lastUpdated: '2017-02-22T17:29:08.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Anxiety disorder of childhood OR adolescence, Anxiety disorder of childhood OR adolescence (disorder)</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Provisional</p><p><b>Severity</b>: V</p><p><b>Onset</b>: Feb 22, 2017</p><p><b>Resolved</b>: Feb 22, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2017-02-22',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '109006',
              display: 'Anxiety disorder of childhood OR adolescence (disorder)',
              userSelected: false
            }
          ],
          text: 'Anxiety disorder of childhood OR adolescence'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'provisional',
        severity: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '399166001',
              display: 'Fatal',
              userSelected: false
            }
          ],
          text: 'V'
        },
        onsetDateTime: '2017-02-22',
        abatementDateTime: '2017-02-22'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p6805887',
      resource: {
        resourceType: 'Condition',
        id: 'p6805887',
        meta: {
          versionId: '6805887',
          lastUpdated: '2017-02-22T17:06:24.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Anxiety disorder of childhood OR adolescence, Anxiety disorder of childhood OR adolescence (disorder)</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Provisional</p><p><b>Severity</b>: V</p><p><b>Onset</b>: Feb 22, 2017</p><p><b>Resolved</b>: Feb 22, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2017-02-22',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '109006',
              display: 'Anxiety disorder of childhood OR adolescence (disorder)',
              userSelected: false
            }
          ],
          text: 'Anxiety disorder of childhood OR adolescence'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'provisional',
        severity: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '399166001',
              display: 'Fatal',
              userSelected: false
            }
          ],
          text: 'V'
        },
        onsetDateTime: '2017-02-22',
        abatementDateTime: '2017-02-22'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p6805919',
      resource: {
        resourceType: 'Condition',
        id: 'p6805919',
        meta: {
          versionId: '6805919',
          lastUpdated: '2017-02-22T17:29:22.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Anxiety disorder of childhood OR adolescence, Anxiety disorder of childhood OR adolescence (disorder)</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Provisional</p><p><b>Severity</b>: V</p><p><b>Onset</b>: Feb 22, 2017</p><p><b>Resolved</b>: Feb 22, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2017-02-22',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '109006',
              display: 'Anxiety disorder of childhood OR adolescence (disorder)',
              userSelected: false
            }
          ],
          text: 'Anxiety disorder of childhood OR adolescence'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'provisional',
        severity: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '399166001',
              display: 'Fatal',
              userSelected: false
            }
          ],
          text: 'V'
        },
        onsetDateTime: '2017-02-22',
        abatementDateTime: '2017-02-22'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p6805903',
      resource: {
        resourceType: 'Condition',
        id: 'p6805903',
        meta: {
          versionId: '6805903',
          lastUpdated: '2017-02-22T17:22:49.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Anxiety disorder of childhood OR adolescence, Anxiety disorder of childhood OR adolescence (disorder)</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Provisional</p><p><b>Severity</b>: V</p><p><b>Onset</b>: Feb 22, 2017</p><p><b>Resolved</b>: Feb 22, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2017-02-22',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '109006',
              display: 'Anxiety disorder of childhood OR adolescence (disorder)',
              userSelected: false
            }
          ],
          text: 'Anxiety disorder of childhood OR adolescence'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'provisional',
        severity: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '399166001',
              display: 'Fatal',
              userSelected: false
            }
          ],
          text: 'V'
        },
        onsetDateTime: '2017-02-22',
        abatementDateTime: '2017-02-22'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p6805927',
      resource: {
        resourceType: 'Condition',
        id: 'p6805927',
        meta: {
          versionId: '6805927',
          lastUpdated: '2017-02-22T17:29:53.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Anxiety disorder of childhood OR adolescence, Anxiety disorder of childhood OR adolescence (disorder)</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Provisional</p><p><b>Severity</b>: V</p><p><b>Onset</b>: Feb 22, 2017</p><p><b>Resolved</b>: Feb 22, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2017-02-22',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '109006',
              display: 'Anxiety disorder of childhood OR adolescence (disorder)',
              userSelected: false
            }
          ],
          text: 'Anxiety disorder of childhood OR adolescence'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'provisional',
        severity: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '399166001',
              display: 'Fatal',
              userSelected: false
            }
          ],
          text: 'V'
        },
        onsetDateTime: '2017-02-22',
        abatementDateTime: '2017-02-22'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p6805943',
      resource: {
        resourceType: 'Condition',
        id: 'p6805943',
        meta: {
          versionId: '6805943',
          lastUpdated: '2017-02-22T17:31:19.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Anxiety disorder of childhood OR adolescence, Anxiety disorder of childhood OR adolescence (disorder)</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Provisional</p><p><b>Severity</b>: V</p><p><b>Onset</b>: Feb 22, 2017</p><p><b>Resolved</b>: Feb 22, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2017-02-22',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '109006',
              display: 'Anxiety disorder of childhood OR adolescence (disorder)',
              userSelected: false
            }
          ],
          text: 'Anxiety disorder of childhood OR adolescence'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'provisional',
        severity: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '399166001',
              display: 'Fatal',
              userSelected: false
            }
          ],
          text: 'V'
        },
        onsetDateTime: '2017-02-22',
        abatementDateTime: '2017-02-22'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d36462585',
      resource: {
        resourceType: 'Condition',
        id: 'd36462585',
        meta: {
          versionId: '40822573',
          lastUpdated: '2019-04-03T16:05:53.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Anxiety disorder of childhood OR adolescence, Anxiety disorder of childhood OR adolescence (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Provisional</p><p><b>Severity</b>: V</p><p><b>Onset</b>: Jul 23, 2022 12:00 A.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2017-02-23',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '109006',
              display: 'Anxiety disorder of childhood OR adolescence (disorder)',
              userSelected: false
            }
          ],
          text: 'Anxiety disorder of childhood OR adolescence'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        clinicalStatus: 'active',
        verificationStatus: 'provisional',
        severity: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '399166001',
              display: 'Fatal',
              userSelected: false
            }
          ],
          text: 'V'
        },
        onsetDateTime: '2022-07-23T00:00:00.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d36462583',
      resource: {
        resourceType: 'Condition',
        id: 'd36462583',
        meta: {
          versionId: '40822571',
          lastUpdated: '2019-04-03T16:05:53.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Anxiety disorder of childhood OR adolescence, Anxiety disorder of childhood OR adolescence (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Provisional</p><p><b>Severity</b>: V</p><p><b>Onset</b>: Feb 23, 2017  4:57 A.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2017-02-23',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '109006',
              display: 'Anxiety disorder of childhood OR adolescence (disorder)',
              userSelected: false
            }
          ],
          text: 'Anxiety disorder of childhood OR adolescence'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        clinicalStatus: 'active',
        verificationStatus: 'provisional',
        severity: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '399166001',
              display: 'Fatal',
              userSelected: false
            }
          ],
          text: 'V'
        },
        onsetDateTime: '2017-02-23T04:57:24.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d36534555',
      resource: {
        resourceType: 'Condition',
        id: 'd36534555',
        meta: {
          versionId: '40822575',
          lastUpdated: '2019-04-03T16:05:53.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Anxiety disorder of childhood OR adolescence, Anxiety disorder of childhood OR adolescence (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Provisional</p><p><b>Severity</b>: V</p><p><b>Onset</b>: Dec 23, 2028 12:00 A.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2017-03-23',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '109006',
              display: 'Anxiety disorder of childhood OR adolescence (disorder)',
              userSelected: false
            }
          ],
          text: 'Anxiety disorder of childhood OR adolescence'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        clinicalStatus: 'active',
        verificationStatus: 'provisional',
        severity: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '399166001',
              display: 'Fatal',
              userSelected: false
            }
          ],
          text: 'V'
        },
        onsetDateTime: '2028-12-23T00:00:00.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d36462581',
      resource: {
        resourceType: 'Condition',
        id: 'd36462581',
        meta: {
          versionId: '40822569',
          lastUpdated: '2019-04-03T16:05:53.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Anxiety disorder of childhood OR adolescence, Anxiety disorder of childhood OR adolescence (disorder)</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Provisional</p><p><b>Severity</b>: V</p><p><b>Onset</b>: Feb 23, 2017  4:53 A.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2017-02-23',
        code: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '109006',
              display: 'Anxiety disorder of childhood OR adolescence (disorder)',
              userSelected: false
            }
          ],
          text: 'Anxiety disorder of childhood OR adolescence'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        clinicalStatus: 'active',
        verificationStatus: 'provisional',
        severity: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '399166001',
              display: 'Fatal',
              userSelected: false
            }
          ],
          text: 'V'
        },
        onsetDateTime: '2017-02-23T04:53:34.000Z'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p10067005',
      resource: {
        resourceType: 'Condition',
        id: 'p10067005',
        meta: {
          versionId: '10067005',
          lastUpdated: '2019-01-13T05:04:35.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: COPD Condition by ZeOmega</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  1, 2017</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/2042017',
          display: 'Generated Domain User for 0'
        },
        dateRecorded: '2019-01-13',
        code: {
          text: 'COPD Condition by ZeOmega'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2017-01-01'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/p9949903',
      resource: {
        resourceType: 'Condition',
        id: 'p9949903',
        meta: {
          versionId: '9949903',
          lastUpdated: '2019-01-07T20:36:45.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Problem</b>: Disorder of lung</p><p><b>Clinical Status</b>: Resolved</p><p><b>Verification Status</b>: Differential</p><p><b>Resolved</b>: Jan  7, 2019</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2019-01-07',
        code: {
          text: 'Disorder of lung'
        },
        category: {
          coding: [
            {
              system: 'http://argonaut.hl7.org',
              code: 'problem',
              display: 'Problem'
            }
          ],
          text: 'Problem'
        },
        clinicalStatus: 'resolved',
        verificationStatus: 'differential',
        abatementDateTime: '2019-01-07'
      }
    },
    {
      fullUrl: 'https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition/d45270555',
      resource: {
        resourceType: 'Condition',
        id: 'd45270555',
        meta: {
          versionId: '45270555',
          lastUpdated: '2020-03-10T15:03:26.000Z'
        },
        text: {
          status: 'generated',
          div: '<div><p><b>Condition</b></p><p><b>Patient</b>: Smart, Valerie S</p><p><b>Diagnosis</b>: Type 2 diabetes mellitus with diabetic peripheral angiopathy without gangrene, Type 2 diabetes mellitus with diabetic peripheral angiopathy without gangrene</p><p><b>Clinical Status</b>: Active</p><p><b>Verification Status</b>: Confirmed</p><p><b>Onset</b>: Mar 10, 2020  3:03 P.M. UTC</p></div>'
        },
        patient: {
          reference: 'Patient/4596007',
          display: 'Smart, Valerie S'
        },
        encounter: {
          reference: 'Encounter/4223906'
        },
        asserter: {
          reference: 'Practitioner/4464007',
          display: 'Portal, Portal'
        },
        dateRecorded: '2020-03-10',
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10-cm',
              code: 'E11.51',
              display: 'Type 2 diabetes mellitus with diabetic peripheral angiopathy without gangrene',
              userSelected: true
            }
          ],
          text: 'Type 2 diabetes mellitus with diabetic peripheral angiopathy without gangrene'
        },
        category: {
          coding: [
            {
              system: 'http://hl7.org/fhir/condition-category',
              code: 'diagnosis',
              display: 'Diagnosis'
            }
          ],
          text: 'Diagnosis'
        },
        clinicalStatus: 'active',
        verificationStatus: 'confirmed',
        onsetDateTime: '2020-03-10T15:03:22.000Z'
      }
    }
  ]
}