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