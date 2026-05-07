// @amlhubs/soaml — OMG SoaML 1.0.1 metamodel + UML profile (frozen lowercase namespace)
//
// Will expose a frozen lowercase dotted namespace `soaml.{concept}.{sub?}.{verb}`
// so call-sites look like:
//   soaml.capability.providedinterface.get(c)
//   soaml.serviceinterface.role.get(s)
//   soaml.servicecontract.role.get(c)
//   soaml.agent.ownedport.get(a)
//   soaml.milestone.predecessor.get(m)
//
// Rule enforcement (integrated-team re-export rules):
//   - No vendor-isms exported (`Client`, `Sdk`, etc. stay internal).
//   - Lowercase identifiers at every depth preserve the dotted-namespace call-site shape.
//   - Concrete classes + interfaces re-exported for tree-shakeable sub-path imports.
//
// Implementation subagents will populate the import block, the `soaml` namespace,
// and the named re-exports as the metaclasses and profile stereotypes are authored
// inside `soaml.ts` between the BEGIN-SOAML / END-SOAML markers.

import type { } from './soaml.js';

export { };
