// @amlhubs/soaml — OMG SoaML 1.0.1 metamodel + UML profile (frozen lowercase namespace)
//
// Package surface for the SoaML 1.0.1 (formal/12-05-10) metaclass and profile
// stereotype projection. Authored to mirror @amlhubs/uml's index.ts pattern:
// type-only re-exports of every interface declared in soaml.ts so consumers
// can write `import type { ICapability, IServiceContract } from '@amlhubs/soaml';`
// at sub-path tree-shakeable granularity.
//
// Will expose a frozen lowercase dotted namespace `soaml.{concept}.{sub?}.{verb}`
// so call-sites look like:
//   soaml.capability.providedinterface.get(c)
//   soaml.serviceinterface.role.get(s)
//   soaml.servicecontract.role.get(c)
//   soaml.agent.ownedport.get(a)
//   soaml.milestone.predecessor.get(m)
// The typed accessor sub-objects are deferred to a future cycle — this pass
// publishes the type re-export surface only, matching the implementer-5
// charter.
//
// Rule enforcement (integrated-team re-export rules):
//   - No vendor-isms exported (`Client`, `Sdk`, etc. stay internal).
//   - Lowercase identifiers at every depth preserve the dotted-namespace call-site shape.
//   - Concrete classes + interfaces re-exported for tree-shakeable sub-path imports.

// ─── Interface type re-exports (extendable contracts) ────────────────────────
// Every interface declared in `soaml.ts` between BEGIN-SOAML / END-SOAML is
// re-exported here so consumers reach the SoaML metaclass surface through the
// `@amlhubs/soaml` package entry. 36 declarations: 35 cluster metaclasses
// (Clusters 1-4) + 1 ISoaMLProfile root (formal/12-05-10 §6 Profile root).

import type {
  // ─── Cluster 1 — Foundation + Capability ───────────────────────────────────
  ICapability,
  IExpose,
  INodeDescriptor,
  IFreeFormDescriptor,
  IFreeFormValue,
  ICatalog,
  ICategorization,
  ICategory,
  ICategoryValue,
  IMotivationElement,
  IMotivationRealization,
  // ─── Cluster 2 — Service Contract / Service Interface / MessageType ────────
  IServiceContract,
  IServiceInterface,
  IService,
  IRequest,
  IProvider,
  IConsumer,
  IMessageType,
  IAttachment,
  IServiceProperty,
  IServiceChannel,
  // ─── Cluster 3 — Participants / Agent / ServicesArchitecture / Collaboration / Port / Milestone ─
  IParticipant,
  IAgent,
  IServicesArchitecture,
  IServiceCollaboration,
  ISoamlCollaborationUse,
  ISoamlPort,
  IMilestone,
  // ─── Cluster 4 — Categorization profile stereotypes (§7.3) ─────────────────
  IProfileCatalog,
  IProfileCategorization,
  IProfileCategory,
  IProfileCategoryValue,
  IProfileNodeDescriptor,
  IProfileFreeFormDescriptor,
  IProfileFreeFormValue,
  // ─── 36. SoaMLProfile root (formal/12-05-10 §6) ────────────────────────────
  ISoaMLProfile,
} from './soaml.js';

export type {
  // ─── Cluster 1 — Foundation + Capability ───────────────────────────────────
  ICapability,
  IExpose,
  INodeDescriptor,
  IFreeFormDescriptor,
  IFreeFormValue,
  ICatalog,
  ICategorization,
  ICategory,
  ICategoryValue,
  IMotivationElement,
  IMotivationRealization,
  // ─── Cluster 2 — Service Contract / Service Interface / MessageType ────────
  IServiceContract,
  IServiceInterface,
  IService,
  IRequest,
  IProvider,
  IConsumer,
  IMessageType,
  IAttachment,
  IServiceProperty,
  IServiceChannel,
  // ─── Cluster 3 — Participants / Agent / ServicesArchitecture / Collaboration / Port / Milestone ─
  IParticipant,
  IAgent,
  IServicesArchitecture,
  IServiceCollaboration,
  ISoamlCollaborationUse,
  ISoamlPort,
  IMilestone,
  // ─── Cluster 4 — Categorization profile stereotypes (§7.3) ─────────────────
  IProfileCatalog,
  IProfileCategorization,
  IProfileCategory,
  IProfileCategoryValue,
  IProfileNodeDescriptor,
  IProfileFreeFormDescriptor,
  IProfileFreeFormValue,
  // ─── 36. SoaMLProfile root (formal/12-05-10 §6) ────────────────────────────
  ISoaMLProfile,
};
