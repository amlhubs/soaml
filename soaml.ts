// ═══════════════════════════════════════════════════════════════════════════
// soaml.ts
// OMG Service oriented architecture Modeling Language (SoaML) 1.0.1
// (formal/12-05-10) — Edition May 2012
//
// Scope: SoaML metamodel (SoaMLMetamodel.xmi, ptc/12-05-02) AND SoaML UML
// profile (SoaMLProfile.xmi, ptc/12-05-03). Both projections are authored
// in this single file so downstream PRE engine consumers can dispatch over
// the full SoaML surface — the metaclass-level types AND the profile-level
// stereotypes that decorate user UML 2 models.
//
// Upstream dependency: @amlhubs/uml. Every SoaML metaclass that specializes
// a UML 2 metaclass (e.g., Capability extends Class, ServiceInterface extends
// Interface, ServiceContract extends Collaboration, Agent extends Component,
// Port-derived metaclasses extend Property) imports the corresponding UML
// interface and base class from @amlhubs/uml.
//
// Architectural ordering:
//   UML (upstream, @amlhubs/uml) → SoaML (downstream, this file)
// This file imports from @amlhubs/uml. Implementer subagents will populate
// the BEGIN-SOAML / END-SOAML region with the full set of SoaML metaclasses
// and profile stereotypes per formal/12-05-10.
//
// @standard OMG SoaML 1.0.1 -- formal/12-05-10
// @edition May 2012
// @metamodel-xmi https://www.omg.org/spec/SoaML/20120501/SoaMLMetamodel.xmi
// @profile-xmi https://www.omg.org/spec/SoaML/20120501/SoaMLProfile.xmi
// ═══════════════════════════════════════════════════════════════════════════

// BEGIN-SOAML

// END-SOAML
