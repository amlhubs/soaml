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
  IDataType,
  IPackage,
  IProperty,
  ISignal,
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

// ─── Cluster 2 — Service Contract / Service Interface / MessageType ────────
// Population:
//  12. IServiceContract              (§6.4.16)  stereotype, extends UML::Collaboration
//  13. IServiceInterface             (§6.4.17)  stereotype, extends UML::Class
//  14. IService                      (§6.4.18)  stereotype, extends UML::Port
//  15. IRequest                      (§6.4.14)  stereotype, extends UML::Port
//  16. IProvider                     (§6.4.13)  stereotype, extends UML::Interface (non-composite); UML::Class (composite)
//  17. IConsumer                     (§6.4.4)   stereotype, extends UML::Interface (non-composite); UML::Class (composite)
//  18. IMessageType                  (§6.4.8)   stereotype, extends UML::DataType, UML::Class, UML::Signal
//  19. IAttachment                   (§6.4.2)   stereotype, extends UML::Property
//  20. IServiceProperty              (§6.4.12)  stereotype, extends UML::Property
//                                              (interface name disambiguated from UML::Property by "Service" prefix —
//                                               the SoaML §6.4.12 stereotype's runtime metaClass discriminator
//                                               remains 'Property' per the SoaMLProfile.xmi <name> element)
//  21. IServiceChannel               (§6.4.15)  stereotype, extends UML::Connector

// --- 12. IServiceContract (§6.4.16) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §6.4.16
 * @metaclass concrete (profile stereotype)
 * @generalization extends UML::Collaboration
 * @todo upstream-uml — ICollaboration is not yet exported by @amlhubs/uml@^0.0.2;
 *   the heritage clause is omitted and the underlying UML::Collaboration is
 *   referenced via baseCollaborationId : string. Adopt `extends ICollaboration`
 *   when @amlhubs/uml surfaces ICollaboration.
 * @definition A ServiceContract is the formalization of a binding exchange of
 *   information, goods, or obligations between parties defining a service. A
 *   ServiceContract is the specification of the agreement between providers
 *   and consumers of a service as to what information, products, assets,
 *   value, and obligations will flow between the providers and consumers of
 *   that service. It specifies the service without regard for realization,
 *   capabilities, or implementation. A ServiceContract does not require the
 *   specification of who, how, or why any party will fulfill their obligations
 *   under that ServiceContract, thus providing for the loose coupling of the
 *   SOA paradigm. In most cases a ServiceContract will specify two roles
 *   (provider and consumer) but other service roles may be specified as well.
 *   The ServiceContract may also own a behavior that specifies the sequencing
 *   of the exchanges between the parties as well as the resulting state and
 *   delivery of the capability. The owned behavior is the choreography of the
 *   service and may use any of the standard UML behaviors such as an
 *   interaction, timing, state, or activity diagram.
 * @ownedAttributes
 *   (none — "Attributes: No new attributes")
 * @associationEnds
 *   (none — "Associations: No new associations"; the underlying UML::Collaboration
 *    is not declared as an explicit base_Collaboration ownedAttribute on the
 *    SoaML-ServiceContract stereotype because ServiceContract specializes the
 *    Collaboration stereotype via Generalization to SoaML-Collaboration; the
 *    ServiceContract therefore inherits Collaboration's base_Collaboration
 *    end. A baseCollaborationId : string is exposed for downstream PRE engine
 *    reflection until @amlhubs/uml surfaces ICollaboration.)
 * @operations
 *   (none declared in §6.4.16)
 * @constraints
 *   [1]: If the CollaborationUse for a ServiceInterface in a services
 *     architecture has isStrict=true (the default), then the parts must be
 *     compatible with the roles they are bound to. For parts to be compatible
 *     with a role, one of the following must be true:
 *     a) The role and part have the same type.
 *     b) The part has a type that specializes the type of the role.
 *     c) The part has a type that realizes the type of the role.
 *     d) The part has a type that contains at least the ownedAttributes and
 *        ownedOperations of the role.
 *     e) The type of each role in a service contract shall have a uses
 *        dependency to the type of all roles that role is connected to.
 */
export interface IServiceContract {
  readonly baseCollaborationId: string;
}

// --- 13. IServiceInterface (§6.4.17) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §6.4.17
 * @metaclass concrete (profile stereotype)
 * @generalization extends UML::Class
 * @todo upstream-uml — IInterface is not yet exported by @amlhubs/uml@^0.0.2;
 *   the heritage clause adopts IClass (already exported) per the §6.4.17
 *   "Extends Metaclass: Class" declaration. The SoaMLProfile.xmi declares both
 *   base_Class and base_Interface ownedAttributes; the latter is referenced
 *   via baseInterfaceId : string | undefined. Adopt the parametric union when
 *   @amlhubs/uml surfaces IInterface.
 * @definition Provides the definition of a service. Defines the specification
 *   of a service interaction as the type of a "Service" or "Request" port. A
 *   ServiceInterface defines the interface and responsibilities of a
 *   participant to provide or consume a service. It is used as the type of a
 *   Service or Request Port. A ServiceInterface is the means for specifying
 *   how a participant is to interact to provide or consume a Service. A
 *   ServiceInterface may include specific protocols, commands, and
 *   information exchange by which actions are initiated and the result of the
 *   real world effects are made available as specified through the
 *   functionality portion of a service. A ServiceInterface may address the
 *   concepts associated with ownership, ownership domains, actions
 *   communicated between legal peers, trust, business transactions,
 *   authority, delegation, etc.
 * @ownedAttributes
 *   (none — "Attributes: No new attributes")
 * @associationEnds
 *   base_Class : Class [1] -- the UML Class decorated by this ServiceInterface stereotype
 *   base_Interface : Interface [1] -- the UML Interface decorated by this ServiceInterface stereotype
 *     (deferred via baseInterfaceId : string | undefined until @amlhubs/uml surfaces IInterface)
 * @operations
 *   (none declared in §6.4.17)
 * @constraints
 *   [1]: All parts of a ServiceInterface must be typed by the Interfaces
 *     realized or used by the ServiceInterface.
 */
export interface IServiceInterface extends IClass {
  readonly baseClassId: string;
  readonly baseInterfaceId: string | undefined;
}

// --- 14. IService (§6.4.18) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §6.4.18
 * @metaclass concrete (profile stereotype)
 * @generalization extends UML::Port
 * @todo upstream-uml — IPort is not yet exported by @amlhubs/uml@^0.0.2;
 *   the heritage clause is omitted and the underlying UML::Port is
 *   referenced via basePortId : string. Adopt `extends IPort` when
 *   @amlhubs/uml surfaces IPort.
 * @definition A Service represents a feature of a Participant that is the
 *   offer of a service by one participant to others using well defined terms,
 *   conditions and interfaces. A Service designates a Port that defines the
 *   connection point through which a Participant offers its capabilities and
 *   provides a service to clients. A Service extends Port to specify a
 *   feature of a Participant that represents a service the Participant
 *   provides and offers for consumption by other participants. The service is
 *   defined by a ServiceInterface. It is implemented by the Participant
 *   either through delegation to its parts or through its methods. The
 *   service may be connected to a business MotivationalElement to indicate
 *   its intended value proposition. There may be constraints associated with
 *   the service that define its nonfunctional characteristics or warranted
 *   qualities of service. This information may be used by potential consumers
 *   to determine if the service meets their needs.
 * @ownedAttributes
 *   (none — "Attributes: No new attributes")
 * @associationEnds
 *   base_Port : Port [1] -- the UML Port decorated by this Service stereotype
 *     (deferred via basePortId : string until @amlhubs/uml surfaces IPort)
 * @operations
 *   (none declared in §6.4.18)
 * @constraints
 *   [1]: The type of a Service must be a ServiceInterface or an Interface.
 *   [2]: The direction property of a Service must be incoming.
 */
export interface IService {
  readonly basePortId: string;
}

// --- 15. IRequest (§6.4.14) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §6.4.14
 * @metaclass concrete (profile stereotype)
 * @generalization extends UML::Port
 * @todo upstream-uml — IPort is not yet exported by @amlhubs/uml@^0.0.2;
 *   the heritage clause is omitted and the underlying UML::Port is
 *   referenced via basePortId : string. Adopt `extends IPort` when
 *   @amlhubs/uml surfaces IPort.
 * @definition A Request represents a feature of a Participant that is the
 *   consumption of a service by one participant provided by others using
 *   well-defined terms, conditions and interfaces. A Request designates ports
 *   that define the connection point through which a Participant meets its
 *   needs through the consumption of services provided by others. A request
 *   port is a "conjugate" port. This means that the provided and required
 *   interfaces of the port type are inverted; this creates a port that uses
 *   the port type rather than implementing the port type.
 * @ownedAttributes
 *   (none — "Attributes: No new attributes")
 * @associationEnds
 *   base_Port : Port [1] -- the UML Port decorated by this Request stereotype
 *     (deferred via basePortId : string until @amlhubs/uml surfaces IPort)
 * @operations
 *   (none declared in §6.4.14)
 * @constraints
 *   [1]: The type of a Request must be a ServiceInterface or an Interface.
 *   [2]: The isConjugated property of a "Request" must be set to true.
 */
export interface IRequest {
  readonly basePortId: string;
}

// --- 16. IProvider (§6.4.13) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §6.4.13
 * @metaclass concrete (profile stereotype)
 * @generalization extends UML::Interface (in the case of a non composite service contract); extends UML::Class (in the case of a composite service contract)
 * @todo upstream-uml — IInterface is not yet exported by @amlhubs/uml@^0.0.2;
 *   the heritage clause adopts IClass (already exported) per the §6.4.13
 *   "Extends Metaclass: Class (in the case of a composite service contract)"
 *   declaration. The non-composite Interface extension is referenced via
 *   baseInterfaceId : string | undefined. Adopt the parametric union when
 *   @amlhubs/uml surfaces IInterface.
 * @definition Provider models the type of a service provider in a
 *   consumer/provider relationship. A provider is then used as the type of a
 *   role in a service contract and the type of a port on a participant. A
 *   "Provider" models the interface provided by the provider of a service.
 *   The provider of the service delivers the results of the service
 *   interaction. The provider will normally be the one that responds to the
 *   service interaction. Provider interfaces are used in as the type of a
 *   "ServiceContract" and are bound by the terms and conditions of that
 *   service contract. The "Provider" interface is intended to be used as the
 *   port type of a participant that provides a service.
 * @ownedAttributes
 *   (none — "Attributes: No additional attributes")
 * @associationEnds
 *   base_Interface : Interface [1] -- the UML Interface decorated by this Provider stereotype
 *     (deferred via baseInterfaceId : string | undefined until @amlhubs/uml surfaces IInterface)
 *   base_Class : Class [1] -- the UML Class decorated by this Provider stereotype (composite service contract)
 * @operations
 *   (none declared in §6.4.13)
 * @constraints
 *   The "Provider" interface is bound by the constraints and behavior of the
 *   ServiceContract of which it is a type.
 */
export interface IProvider extends IClass {
  readonly baseInterfaceId: string | undefined;
  readonly baseClassId: string;
}

// --- 17. IConsumer (§6.4.4) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §6.4.4
 * @metaclass concrete (profile stereotype)
 * @generalization extends UML::Interface (in the case of a non composite service contract); extends UML::Class (in the case of a composite service contract)
 * @todo upstream-uml — IInterface is not yet exported by @amlhubs/uml@^0.0.2;
 *   the heritage clause adopts IClass (already exported) per the §6.4.4
 *   "Extends Metaclass: Class (in the case of a composite service contract)"
 *   declaration. The non-composite Interface extension is referenced via
 *   baseInterfaceId : string | undefined. Adopt the parametric union when
 *   @amlhubs/uml surfaces IInterface.
 * @definition Consumer models the type of a service consumer. A consumer is
 *   then used as the type of a role in a service contract and the type of a
 *   port on a participant. A "Consumer" models the interface provided by the
 *   consumer of a service. The consumer of the service receives the results
 *   of the service interaction. The consumer will normally be the one that
 *   initiates the service interaction. Consumer interfaces are used as the
 *   type of a "ServiceContract" and are bound by the terms and conditions of
 *   that service contract. The "Consumer" is intended to be used as the port
 *   type of a participant that uses a service.
 * @ownedAttributes
 *   (none — "Attributes: No additional attributes")
 * @associationEnds
 *   base_Interface : Interface [1] -- the UML Interface decorated by this Consumer stereotype
 *     (deferred via baseInterfaceId : string | undefined until @amlhubs/uml surfaces IInterface)
 *   base_Class : Class [1] -- the UML Class decorated by this Consumer stereotype (composite service contract)
 * @operations
 *   (none declared in §6.4.4)
 * @constraints
 *   The "Consumer" is bound by the constraints and behavior of the
 *   ServiceContract of which it is a type.
 */
export interface IConsumer extends IClass {
  readonly baseInterfaceId: string | undefined;
  readonly baseClassId: string;
}

// --- 18. IMessageType (§6.4.8) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §6.4.8
 * @metaclass concrete (profile stereotype)
 * @generalization extends UML::DataType, UML::Class, UML::Signal
 * @definition The specification of information exchanged between service
 *   consumers and providers. A MessageType is a kind of value object that
 *   represents information exchanged between participant requests and
 *   services. This information consists of data passed into, and/or returned
 *   from, the invocation of an operation or event signal defined in a service
 *   interface. A MessageType is in the domain or service-specific content and
 *   does not include header or other implementation or protocol-specific
 *   information.
 * @ownedAttributes
 *   encoding : String [0..1] -- Specifies the encoding of the message payload.
 * @associationEnds
 *   base_DataType : DataType [1] -- the UML DataType decorated by this MessageType stereotype
 *   base_Class : Class [1] -- the UML Class decorated by this MessageType stereotype
 *   base_Signal : Signal [1] -- the UML Signal decorated by this MessageType stereotype
 * @operations
 *   (none declared in §6.4.8)
 * @constraints
 *   [1]: MessageType cannot contain ownedOperations.
 *   [2]: MessageType cannot contain ownedBehaviors.
 *   [3]: All ownedAttributes must be Public.
 */
export interface IMessageType extends IDataType, IClass, ISignal {
  readonly encoding: string | undefined;
  readonly baseDataTypeId: string;
  readonly baseClassId: string;
  readonly baseSignalId: string;
}

// --- 19. IAttachment (§6.4.2) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §6.4.2
 * @metaclass concrete (profile stereotype)
 * @generalization extends UML::Property
 * @definition A part of a Message that is attached to rather than contained
 *   in the message. An Attachment denotes some component of a message that is
 *   an attachment to it (as opposed to a direct part of the message itself).
 *   In general this is not likely to be used greatly in higher level design
 *   activities, but for many processes attached data is important to
 *   differentiate from embedded message data. For example, a catalog service
 *   may return general product details as a part of the structured message
 *   but images as attachments to the message; this also allows us to denote
 *   that the encoding of the images is binary (as opposed to the textual
 *   encoding of the main message). Attachments may be used to indicate part
 *   of service data that can be separately accessed, reducing the data sent
 *   between consumers and providers unless it is needed.
 * @ownedAttributes
 *   encoding : String [0..1] -- Denotes the platform encoding mechanism to use in
 *     generating the schema for the message; examples might be SOAP-RPC,
 *     Doc-Literal, ASN.1, etc.
 *   mimeType : String [0..1] -- Denotes the iana MIME media type for the
 *     Attachment See: http://www.iana.org/assignments/media-types/.
 *     (NOTE: spelled "mimetype" in SoaMLProfile.xmi <name> element; the spec
 *     PDF §6.4.2 normative attribute name is "mimeType". Both forms are
 *     preserved — TypeScript identifier `mimeType` matches the PDF, and the
 *     XMI <name> form is preserved verbatim above.)
 * @associationEnds
 *   base_Property : Property [1] -- the UML Property decorated by this Attachment stereotype
 * @operations
 *   (none declared in §6.4.2)
 * @constraints
 *   (none — "Constraints: No additional constraints")
 */
export interface IAttachment extends IProperty {
  readonly encoding: string | undefined;
  readonly mimeType: string | undefined;
  readonly basePropertyId: string;
}

// --- 20. IServiceProperty (§6.4.12) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §6.4.12
 * @metaclass concrete (profile stereotype)
 * @generalization extends UML::Property
 * @note The SoaML §6.4.12 stereotype's spec name is "Property". The
 *   TypeScript interface identifier is `IServiceProperty` to disambiguate
 *   from the upstream UML metaclass `IProperty`. Downstream PRE engine
 *   consumers that dispatch by metaclass-name discriminator MUST use the
 *   spec form 'Property' (per SoaMLProfile.xmi <name>Property</name>) for
 *   the SoaML stereotype, not the TypeScript identifier.
 * @definition The Property stereotype augments the standard UML Property
 *   with the ability to be distinguished as an identifying property meaning
 *   the property can be used to distinguish instances of the containing
 *   Classifier. This is also known as a "primary key." In the context of
 *   SoaML the ID is used to distinguish the correlation identifier in a
 *   message. A property is a structural feature. It relates an instance of
 *   the class to a value or collection of values of the type of the feature.
 *   A property may be designated as an identifier property, a property that
 *   can be used to distinguish or identify instances of the containing
 *   classifier in distributed systems.
 * @ownedAttributes
 *   isID : Boolean [0..1] = false -- Indicates the property contributes to the
 *     identification of instances of the containing classifier.
 * @associationEnds
 *   base_Property : Property [1] -- the UML Property decorated by this Property (SoaML §6.4.12) stereotype
 * @operations
 *   (none declared in §6.4.12)
 * @constraints
 *   (none — "Constraints: No additional constraints")
 */
export interface IServiceProperty extends IProperty {
  readonly isID: boolean | undefined;
  readonly basePropertyId: string;
}

// --- 21. IServiceChannel (§6.4.15) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §6.4.15
 * @metaclass concrete (profile stereotype)
 * @generalization extends UML::Connector
 * @todo upstream-uml — IConnector is not yet exported by @amlhubs/uml@^0.0.2;
 *   the heritage clause is omitted and the underlying UML::Connector is
 *   referenced via baseConnectorId : string. Adopt `extends IConnector`
 *   when @amlhubs/uml surfaces IConnector.
 * @definition A communication path between Services and Requests within an
 *   architecture. A ServiceChannel provides a communication path between
 *   consumer Requests and provider services.
 * @ownedAttributes
 *   (none — "Attributes: No new attributes")
 * @associationEnds
 *   base_Connector : Connector [1] -- the UML Connector decorated by this ServiceChannel stereotype
 *     (deferred via baseConnectorId : string until @amlhubs/uml surfaces IConnector)
 * @operations
 *   (none declared in §6.4.15)
 * @constraints
 *   [1]: One end of a ServiceChannel must be a Request and the other a
 *     Service in an architecture.
 *   [2]: The Request and Service connected by a ServiceChannel must be
 *     compatible.
 *   [3]: The contract Behavior for a ServiceChannel must be compatible with
 *     any protocols specified for the connected requests and Services.
 */
export interface IServiceChannel {
  readonly baseConnectorId: string;
}

// END-SOAML
