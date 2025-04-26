// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: 1,
  Id: 'powersync',
  Name: 'PowerSync',
  Description: 'Syncs between SQLite on the client-side and Postgres, MongoDB or MySQL on the server-side.',
  Website: 'https://www.powersync.com',
  GitHub: "https://github.com/powersync-ja",
  License: 'FSL-Apache 2.0 (Service) & Apache 2.0 (SDKs)',
  UniquenessNote: "test UniquenessNote.",
  InitialReleaseDate: new Date("2023-11-30"),
  Deployment: ['Self-hosted', 'Hosted'],
  MaturityLevel: "Production-Ready",
  AppTarget: {
    Platform: {
      data: ['Browser', 'iOS', 'Android', 'macOS', 'WASM', 'Linux'],
    },
    LanguageSDK: {
      data: ['TypeScript', 'Swift', 'Kotlin', 'Rust', 'Dart', '.NET'],
    },
    FrameworkIntegrations: {
      data: ['React', 'React Native', 'Vue', 'Svelte', 'SolidJS', 'Flutter'],
    },
  },
  Networking: {
    Protocol: {
      data: ['WebSockets', 'HTTP'],
    },
    Topology: {
      data: 'Client-Server',
    },
  },
  ServerSideData: {
    PersistenceMechanism: {
      data: ['Postgres', 'MongoDB', 'MySQL'],
      comment:
        'Backend source databases: Postgres, MongoDB, MySQL. Storage of sync bucket data: MongoDB, Postgres',
    },
    DataModelParadigm: {
      data: 'Relational',
    },
    ExistingDatabaseSupport: {
      data: 'Works with backend source databases: Postgres, MongoDB, MySQL',
    },
    DataSize: {
      data: 'No theoretical limit',
    },
  },
  ClientSideData: {
    QueryAPI: {
      data: ['Async', 'Reactive queries'],
    },
    PersistenceMechanism: {
      data: ['SQLite', 'IndexedDB', 'OPFS'],
    },
    PersistenceFeatures: {
      data: 'FTS, Indexes, Transactions',
    },
    DataModel: {
      data: 'Relational',
      comment:
        'Schemaless JSON synced and stored in SQLite and exposed as views to allow for relational queries based on client-side schema.',
    },
    SchemaManagement: {
      data: ['Schema definition'],
      comment:
        'Client-side schema definition. Schema is used to expose views in SQLite based on schemaless synced data, generally avoiding the need for schema migrations.',
    },
    OfflineReads: {
      data: 'Full Support',
      comment: 'Dynamic query support.',
    },
    OptimisticUpdates: {
      data: 'Yes',
    },
    OfflineWrites: {
      data: 'Yes',
    },
  },
  SynchronizationStrategy: {
    FullOrPartialReplication: {
      data: ['Full Replication', 'Partial Replication'],
      comment:
        'Partial or full replica defined using [Sync Rules](https://docs.powersync.com/usage/sync-rules). Sync Rules can make use of authenticated JWT parameters or client parameters.',
    },
    ConflictHandling: {
      data: 'Custom conflict resolution supported',
      comment:
        'Developer defines an upload function which writes local mutations to backend database. Simplest implementation of this results in LWW. Can be customized by developer, including using CRDT data structures like [Yjs](https://www.powersync.com/blog/postgres-and-yjs-crdt-collaborative-text-editing-using-powersync), e.g.',
    },
    WhereResolutionOccurs: {
      data: 'Server',
    },
    WhatGetsSynced: {
      data: {
        ServerToClient: 'ops',
        ClientToServer: 'mutations',
      },
    },
    Authority: {
      data: 'Centralized',
    },
  },
  AuthIdentity: {
    Encryption: {
      data: 'Yes',
      comment:
        'transport-level and storage-level locally on the device using SQLCipher; E2EE can also be accomplished by syncing encrypted data and decrypting on client',
    },
    AuthenticationMethod: {
      data: ['JWT Tokens'],
    },
    AuthorizationPermissions: {
      data: 'Custom',
      comment:
        "Reads: Access to data is controlled by authenticated parameters in JWT used in Sync Rules\nWrites: Access controlled using developer's own backend (through which writes go to)",
    },
  },
  DevelopmentWorkflowsDX: {
    DebuggingTools: {
      data: ['Dashboard', 'Data Inspector'],
      comment:
        '[Dashboard](https://docs.powersync.com/usage/tools/powersync-dashboard), [Diagnostic tool to inspect synced data](https://github.com/powersync-ja/powersync-js/tree/main/tools/diagnostics-app)',
    },
    CLI: {
      data: 'CLI for managing cloud instances of PowerSync Service',
    },
  },
})
