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

// ─── Upstream UML 2.5.1 imports (from @amlhubs/uml) ─────────────────────────
// Cluster 1 — Foundation + Capability — references the following upstream UML
// metaclasses. UML metaclasses NOT yet exported by @amlhubs/uml@^0.0.2
// (IDependency, IRealization, IArtifact) are referenced via opaque `Id`-suffix
// `string` association ends per the inventory's deferred-imports section,
// with `@todo upstream-uml` annotations on each affected declaration.
import type {
  IClass,
  IPackage,
  IProperty,
  IValueSpecification,
} from '@amlhubs/uml';

// ─── Cluster 1 — Foundation + Capability ────────────────────────────────────
// Population:
//   1. Capability                     (§6.4.3)   stereotype, extends UML::Class
//   2. Expose                         (§6.4.7)   stereotype, extends UML::Dependency
//   3. NodeDescriptor                 (§7.3.5)   metaclass / RAS placeholder, extends UML::Artifact
//   4. FreeFormDescriptor             (§7.3.5)   metaclass / RAS placeholder, extends UML::Property
//   5. FreeFormValue                  (§7.3.5)   metaclass / RAS placeholder, extends UML::ValueSpecification
//   6. Catalog                        (§7.3.1)   metaclass, extends UML::Package, specializes NodeDescriptor
//   7. Categorization                 (§7.3.2)   metaclass, extends UML::Dependency
//   8. Category                       (§7.3.3)   metaclass, generalizes NodeDescriptor
//   9. CategoryValue                  (§7.3.4)   metaclass, generalizes FreeFormValue
//  10. MotivationElement              (§8.3.1)   metaclass (abstract), root, BMM placeholder
//  11. MotivationRealization          (§8.3.2)   metaclass / stereotype, generalizes UML::Realization

// --- 1. ICapability (§6.4.3) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §6.4.3
 * @metaclass concrete (profile stereotype)
 * @generalization extends UML::Class
 * @definition A Capability is the ability to act and produce an outcome that
 *   achieves a result. It can specify a general capability of a participant
 *   as well as the specific ability to provide a service. A Capability models
 *   the ability to act and produce an outcome that achieves a result that may
 *   provide a service specified by a ServiceContract or ServiceInterface
 *   irrespective of the Participant that might provide that service. A
 *   ServiceContract, alone, has no dependencies or expectation of how the
 *   capability is realized — thereby separating the concerns of "what" vs.
 *   "how." The Capability may specify dependencies or internal process to
 *   detail how that capability is provided including dependencies on other
 *   Capabilities.
 * @ownedAttributes
 *   (none — "Attributes: No additional attributes")
 * @associationEnds
 *   base_Class : Class [1] -- the UML Class decorated by this Capability stereotype
 * @operations
 *   (none declared in §6.4.3)
 * @constraints
 *   (none — "Constraints: No additional constraints")
 */
export interface ICapability extends IClass {
  readonly baseClassId: string;
}

// --- 2. IExpose (§6.4.7) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §6.4.7
 * @metaclass concrete (profile stereotype)
 * @generalization extends UML::Dependency
 * @todo upstream-uml — IDependency is not yet exported by @amlhubs/uml@^0.0.2;
 *   the heritage clause is omitted and the underlying UML::Dependency is
 *   referenced via baseDependencyId : string. Adopt `extends IDependency`
 *   when @amlhubs/uml surfaces IDependency.
 * @definition An Expose dependency is used to indicate a Capability exposed
 *   through a ServiceInterface. The source of the Expose is the
 *   ServiceInterface, the target is the exposed Capability. The Expose
 *   dependency provides the ability to indicate what Capabilities that are
 *   required by or are provided by a participant should be exposed through
 *   a Service Interface.
 * @ownedAttributes
 *   (none — "Attributes: No additional attributes")
 * @associationEnds
 *   base_Dependency : Dependency [1] -- the UML Dependency decorated by this Expose stereotype
 * @operations
 *   (none declared in §6.4.7)
 * @constraints
 *   (none — "Constraints: No additional constraints")
 */
export interface IExpose {
  readonly baseDependencyId: string;
}

// --- 3. INodeDescriptor (§7.3.5) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §7.3.5
 * @metaclass concrete (RAS placeholder)
 * @generalization extends UML::Artifact (RAS Placeholder)
 * @todo upstream-uml — IArtifact is not yet exported by @amlhubs/uml@^0.0.2;
 *   the heritage clause is omitted and the underlying UML::Artifact is
 *   referenced via baseArtifactId : string. Adopt `extends IArtifact`
 *   when @amlhubs/uml surfaces IArtifact.
 * @definition The following stereotypes represent placeholders for the
 *   corresponding elements in the OMG Reusable Asset Specification (RAS).
 *   These placeholders are included to provide SoaML integration with RAS.
 *   NodeDescriptor extends Artifact.
 * @ownedAttributes
 *   (none declared)
 * @associationEnds
 *   base_Artifact : Artifact [1] -- the UML Artifact decorated by this NodeDescriptor stereotype
 * @operations
 *   (none)
 * @constraints
 *   (none)
 */
export interface INodeDescriptor {
  readonly baseArtifactId: string;
}

// --- 4. IFreeFormDescriptor (§7.3.5) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §7.3.5
 * @metaclass concrete (RAS placeholder)
 * @generalization extends UML::Property (RAS Placeholder)
 * @definition The following stereotypes represent placeholders for the
 *   corresponding elements in the OMG Reusable Asset Specification (RAS).
 *   These placeholders are included to provide SoaML integration with RAS.
 *   FreeFormDescriptor extends Property.
 * @ownedAttributes
 *   (none declared)
 * @associationEnds
 *   base_Property : Property [1] -- the UML Property decorated by this FreeFormDescriptor stereotype
 * @operations
 *   (none)
 * @constraints
 *   (none)
 */
export interface IFreeFormDescriptor extends IProperty {
  readonly basePropertyId: string;
}

// --- 5. IFreeFormValue (§7.3.5) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §7.3.5
 * @metaclass concrete (RAS placeholder)
 * @generalization extends UML::ValueSpecification (RAS Placeholder)
 * @definition The following stereotypes represent placeholders for the
 *   corresponding elements in the OMG Reusable Asset Specification (RAS).
 *   These placeholders are included to provide SoaML integration with RAS.
 *   FreeFormValue extends ValueSpecification.
 * @ownedAttributes
 *   (none declared)
 * @associationEnds
 *   base_ValueSpecification : ValueSpecification [1] -- the UML ValueSpecification decorated by this FreeFormValue stereotype
 * @operations
 *   (none)
 * @constraints
 *   (none)
 */
export interface IFreeFormValue extends IValueSpecification {
  readonly baseValueSpecificationId: string;
}

// --- 6. ICatalog (§7.3.1) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §7.3.1
 * @metaclass concrete
 * @generalization extends UML::Package; specializes NodeDescriptor
 *   (the spec PDF prints "NoteDescriptor" in §7.3.1 — preserved here as
 *    "NodeDescriptor" to match §7.3.5 RAS Placeholder spelling and the
 *    SoaMLProfile.xmi base_Package convention)
 * @definition Provides a means of classifying and organizing elements by
 *   categories for any purpose. A named collection of related elements,
 *   including other catalogs characterized by a specific set of categories.
 *   Applying a Category to an Element using a Categorization places that
 *   Element in the Catalog. Catalog is a RAS DescriptorGroup containing
 *   other Catalogs and/or Categories providing the mapping to RAS
 *   classification.
 * @ownedAttributes
 *   (none — "Attributes: No additional attributes")
 * @associationEnds
 *   base_Package : Package [1] -- the UML Package decorated by this Catalog stereotype
 * @operations
 *   (none)
 * @constraints
 *   [1]: Catalogs can only contain Categories, CategoryValues, or other
 *     Catalogs.
 */
export interface ICatalog extends IPackage {
  readonly basePackageId: string;
}

// --- 7. ICategorization (§7.3.2) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §7.3.2
 * @metaclass concrete
 * @generalization extends UML::Dependency
 * @todo upstream-uml — IDependency is not yet exported by @amlhubs/uml@^0.0.2;
 *   the heritage clause is omitted and the underlying UML::Dependency is
 *   referenced via baseDependencyId : string. Adopt `extends IDependency`
 *   when @amlhubs/uml surfaces IDependency.
 * @definition Used to categorize an Element by a Category or CategoryValue.
 *   Categorization connects an Element to a Category or CategoryValue in
 *   order to categorize or classify that element. The Element then becomes
 *   a member of the Catalog that contains that Category. This allows
 *   Elements to be organized in many hierarchical Catalogs where each
 *   Catalog is described by a set of Categories. The source is any Element,
 *   the target is a Category or CategoryValue.
 * @ownedAttributes
 *   (none — "Attributes: No additional attributes")
 * @associationEnds
 *   base_Dependency : Dependency [1] -- the UML Dependency decorated by this Categorization stereotype
 * @operations
 *   (none)
 * @constraints
 *   [1]: The target of a Categorization must be either a Category or
 *     CategoryValue.
 */
export interface ICategorization {
  readonly baseDependencyId: string;
}

// --- 8. ICategory (§7.3.3) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §7.3.3
 * @metaclass concrete
 * @generalization NodeDescriptor (Generalizations clause); transitively extends UML::Artifact
 * @definition A classification or division used to characterize the elements
 *   of a catalog and to categorize model elements. A Category is a piece of
 *   information about an element. A Category has a name indicating what the
 *   information is about, and a set of attributes and constraints that
 *   characterize the Category. An Element may have many Categories, and the
 *   same Category can be applied to many Elements. Categories may be
 *   organized into Catalogs hierarchies.
 * @ownedAttributes
 *   (none — "Attributes: No additional attributes")
 * @associationEnds
 *   (inherited from NodeDescriptor)
 * @operations
 *   (none)
 * @constraints
 *   [1]: A Category must be contained in a Catalog.
 */
export interface ICategory extends INodeDescriptor {
}

// --- 9. ICategoryValue (§7.3.4) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §7.3.4
 * @metaclass concrete
 * @generalization FreeFormValue (Generalizations clause); transitively extends UML::ValueSpecification
 * @definition Provides specific values for a Category to further categorize
 *   model elements. A CategoryValue provides values for the attributes of a
 *   Category. It may also be used to categorize model elements providing
 *   detailed information for the category.
 * @ownedAttributes
 *   (none — "Attributes: No additional attributes")
 * @associationEnds
 *   (inherited from FreeFormValue)
 * @operations
 *   (none)
 * @constraints
 *   [1]: The classifier for a CategoryValue must be a Category.
 */
export interface ICategoryValue extends IFreeFormValue {
}

// --- 10. IMotivationElement (§8.3.1) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §8.3.1
 * @metaclass abstract
 * @generalization (root -- "Generalizations" clause is empty in the spec; "Extensions" clause is empty)
 * @definition A placeholder for BMM MotivationElement. This placeholder
 *   would be replaced by a BMM profile or metamodel element.
 * @ownedAttributes
 *   (none declared)
 * @associationEnds
 *   (none declared)
 * @operations
 *   (none)
 * @constraints
 *   (none)
 */
export interface IMotivationElement {
}

// --- 11. IMotivationRealization (§8.3.2) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §8.3.2
 * @metaclass concrete
 * @generalization UML::Realization (Generalizations clause); extends UML::Realization (Extensions clause)
 * @todo upstream-uml — IRealization is not yet exported by @amlhubs/uml@^0.0.2;
 *   the heritage clause is omitted and the underlying UML::Realization is
 *   referenced via baseRealizationId : string. Adopt `extends IRealization`
 *   when @amlhubs/uml surfaces IRealization.
 * @definition Models a realization of a BMM MotivationElement (a Vision,
 *   Goal, Objective, Mission, Strategy, Tactic, BusinessPolicy, Regulation,
 *   etc.) by some BehavioredClassifier.
 * @ownedAttributes
 *   (none — "Attributes: No additional attributes")
 * @associationEnds
 *   realizedEnd : End [*] -- The ends realized by this MeansRealization. (Metamodel only)
 *   base_Realization : Realization [1] -- the UML Realization decorated by this MotivationRealization stereotype
 * @operations
 *   (none)
 * @constraints
 *   (none — "Constraints: No additional constraints")
 */
export interface IMotivationRealization {
  readonly baseRealizationId: string;
  readonly realizedEndIds: ReadonlyArray<string>;
}

// END-SOAML
