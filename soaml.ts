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
  IComment,
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
 * @see IServiceContract — §6.4.3 cites ServiceContract as a specifier of the service a Capability may provide
 * @see IServiceInterface — §6.4.3 cites ServiceInterface as a specifier of the service a Capability may provide
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
 * @see ICapability — §6.4.7 cites Capability as the target of an Expose dependency
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
 * @see IServiceContract — §6.4.18 cites ServiceContract as the contract a Service is bound by
 * @see IServiceInterface — §6.4.18 constraint [1] requires the type of a Service to be a ServiceInterface or an Interface
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
 * @see IService — §6.4.14 contrasts the Request port (consumer side) with the Service port (provider side)
 * @see IServiceInterface — §6.4.14 constraint [1] requires the type of a Request to be a ServiceInterface or an Interface
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
 * @note SoaML §6.4.12 declares `isID : Boolean [0..1] = false`. Upstream
 *   UML `IProperty.isID` is `Boolean [1..1] = false` (UML 2.5.1 §9.5.1 — Property
 *   inherits `isReadOnly` and ID-companion semantics from MultiplicityElement
 *   defaults). TypeScript covariance forbids widening a required parent
 *   property to `boolean | undefined` in the child interface, so this
 *   implementation surfaces `isID` as `boolean` (with the spec default `false`
 *   substituting for the optional-and-absent case). XMI serialization MUST
 *   omit the attribute when the value equals the spec default `false`, which
 *   restores round-trip equivalence with the `[0..1]` declaration.
 */
export interface IServiceProperty extends IProperty {
  readonly isID: boolean;
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

// ─── Cluster 3 — Participants / Agent / ServicesArchitecture / Collaboration / Port / Milestone ─
// Population:
//  22. IParticipant                   (§6.4.10)  stereotype, extends UML::Class
//  23. IAgent                         (§6.4.1)   stereotype, generalizes IParticipant (chained Generalization
//                                               captured in the SoaML metamodel; the §6.4.1 spec text states
//                                               "An Agent is a special kind of Participant")
//  24. IServicesArchitecture          (§6.4.19)  stereotype, extends UML::Collaboration
//  25. IServiceCollaboration          (§6.4.5)   stereotype, extends UML::Collaboration
//                                               (interface name disambiguated from the future @amlhubs/uml
//                                                ICollaboration export by the "Service" prefix; the SoaML
//                                                §6.4.5 stereotype's runtime metaClass discriminator remains
//                                                'Collaboration' per the SoaMLProfile.xmi <name> element)
//  26. ISoamlCollaborationUse         (§6.4.6)   stereotype, extends UML::CollaborationUse
//                                               (interface name disambiguated from the future @amlhubs/uml
//                                                ICollaborationUse export by the "Soaml" prefix; the runtime
//                                                metaClass discriminator remains 'CollaborationUse' per the
//                                                SoaMLProfile.xmi <name> element)
//  27. ISoamlPort                     (§6.4.11)  stereotype, extends UML::Port
//                                               (interface name disambiguated from the future @amlhubs/uml
//                                                IPort export by the "Soaml" prefix; the runtime metaClass
//                                                discriminator remains 'Port' per the SoaMLProfile.xmi
//                                                <name> element)
//  28. IMilestone                     (§6.4.9)   stereotype, extends UML::Comment

// --- 22. IParticipant (§6.4.10) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §6.4.10
 * @metaclass concrete (profile stereotype)
 * @generalization extends UML::Class
 * @definition A participant is the type of a provider and/or consumer of
 *   services. In the business domain a participant may be a person,
 *   organization, or system. In the systems domain a participant may be a
 *   system, application, or component. A Participant represents some
 *   (possibly concrete) party or component that provides and/or consumes
 *   services (participants may represent people, organizations, or systems
 *   that provide and/or use services). A Participant is a service provider
 *   if it offers a service. A Participant is a service consumer if it uses a
 *   service. A participant may provide or consume any number of services.
 *   Service consumer and provider are roles Participants play: the role of
 *   providers in some services and consumers in others, depending on the
 *   capabilities they provide and the needs they have to carry out their
 *   capabilities. Since most consumers and providers have both services and
 *   requests, Participant is used to model both. Participants have ports.
 *   These ports may use the "Service" and "Request" stereotypes that are the
 *   interaction points where services are offered or consumed respectively.
 *   Internally a participant may specify a behavior, a business process, or
 *   a more granular service contract as a Participant Architecture. A
 *   concrete Participant may participate in and/or adhere to any number of
 *   services architectures. A composite structure is generally used to
 *   define the concrete sub-components of the participant.
 * @ownedAttributes
 *   (none — "Attributes: No additional attributes")
 * @associationEnds
 *   base_Class : Class [1] -- the UML Class decorated by this Participant stereotype
 * @operations
 *   (none declared in §6.4.10)
 * @constraints
 *   [1]: A Participant cannot realize or use Interfaces directly; it must do
 *     so through service ports, which may be Service or Request.
 *   [2]: Note that the technology implementation of a component implementing
 *     a participant is not bound by the above rule in the case of it's
 *     internal technology implementation, the connections to a participant
 *     components "container" and other implementation components may or may
 *     not use services.
 */
export interface IParticipant extends IClass {
  readonly baseClassId: string;
}

// --- 23. IAgent (§6.4.1) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §6.4.1
 * @metaclass concrete (profile stereotype)
 * @generalization generalizes IParticipant — per §6.4.1 ("Generalizes:
 *   Participant") and the SoaMLProfile.xmi packagedElement
 *   xmi:id='SoaML-Agent' which carries a <generalization> element whose
 *   <general xmi:idref='SoaML-Participant'/> binds the Agent stereotype to
 *   Participant. The SoaML metamodel therefore exposes a chained
 *   Generalization (Agent ↦ Participant ↦ UML::Class); this projection
 *   captures it via `extends IParticipant` so downstream PRE engine
 *   reflection can traverse the spine without re-discovering the chain.
 * @definition An Agent is a classification of autonomous entities that can
 *   adapt to and interact with their environment. It describes a set of
 *   agent instances that have features, constraints, and semantics in
 *   common. Agents in SoaML are also participants, providing and using
 *   services. In general, agents can be software agents, hardware agents,
 *   firmware agents, robotic agents, human agents, and so on. Agent extends
 *   Participant with the ability to be active, participating components of
 *   a system. They are specialized because they have their own thread of
 *   control or lifecycle. Another way to think of agents is that they are
 *   "active participants" in a SOA system. Participants are Components
 *   whose capabilities and needs are static. In contrast, Agents are
 *   Participants whose needs and capabilities may change over time. Agents
 *   possess the capability to have services and Requests and can have
 *   internal structure and ports. They collaborate and interact with their
 *   environment. An Agent's classifierBehavior, if any, is treated as its
 *   life-cycle, or what defines its emergent or adaptive behavior.
 * @ownedAttributes
 *   (none — "Attributes: No additional attributes")
 * @associationEnds
 *   (none — "Associations: No additional associations"; the base_Class
 *    association end is inherited from IParticipant via the chained
 *    Generalization above.)
 * @operations
 *   (none declared in §6.4.1)
 * @constraints
 *   [1]: The property isActive must always be true.
 * @see IParticipant — §6.4.1 "Generalizes: Participant"; this `@see` reinforces the chained Generalization the heritage clause already encodes
 */
export interface IAgent extends IParticipant {}

// --- 24. IServicesArchitecture (§6.4.19) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §6.4.19
 * @metaclass concrete (profile stereotype)
 * @generalization extends UML::Collaboration
 * @todo upstream-uml — ICollaboration is not yet exported by @amlhubs/uml@^0.0.2;
 *   the heritage clause is omitted and the underlying UML::Collaboration is
 *   referenced via baseCollaborationId : string. Adopt `extends ICollaboration`
 *   when @amlhubs/uml surfaces ICollaboration.
 * @definition The high-level view of a Service Oriented Architecture that
 *   defines how a set of participants works together, forming a community,
 *   for some purpose by providing and using services. A ServicesArchitecture
 *   (a SOA) describes how participants work together for a purpose by
 *   providing and using services expressed as service contracts. By
 *   expressing the use of services, the ServicesArchitecture implies some
 *   degree of knowledge of the dependencies between the participants in
 *   some context. Each use of a service in a ServicesArchitecture is
 *   represented by the use of a ServiceContract bound to the roles of
 *   participants in that architecture. Note that use of a
 *   ServicesArchitecture is optional but is recommended to show a high
 *   level view of how a set of Participants work together for some purpose.
 *   Where as simple services may not have any dependencies or links to a
 *   business process, enterprise services can often only be understood in
 *   context. The services architecture provides that context, and may also
 *   contain a behavior, which is the business process. The participant's
 *   roles in a services architecture correspond to the swim lanes or pools
 *   in a business process. A ServicesArchitecture may be specified
 *   externally — in a "B2B" type collaboration where there is no
 *   controlling entity or as the ServicesArchitecture of a participant —
 *   under the control of a specific entity and/or business process. A "B2B"
 *   services architecture uses the "ServicesArchitecture" stereotype on a
 *   collaboration. A Participant may play a role in any number of services
 *   architecture thereby representing the role a participant plays and the
 *   requirements that each role places on the participant.
 * @ownedAttributes
 *   (none — "Attributes: No new attributes")
 * @associationEnds
 *   (none — "Associations: No new associations"; the underlying
 *    UML::Collaboration is not declared as an explicit base_Collaboration
 *    ownedAttribute on the SoaML-ServicesArchitecture stereotype because
 *    ServicesArchitecture specializes the Collaboration stereotype via
 *    Generalization to SoaML-Collaboration; the ServicesArchitecture
 *    therefore inherits Collaboration's base_Collaboration end. A
 *    baseCollaborationId : string is exposed for downstream PRE engine
 *    reflection until @amlhubs/uml surfaces ICollaboration.)
 * @operations
 *   (none declared in §6.4.19)
 * @constraints
 *   [1]: The parts of a ServicesArchitecture must be typed by a Participant
 *     or capability. Each participant satisfying roles in a
 *     ServicesArchitecture shall have a port for each role binding attached
 *     to that participant. This port shall have a type compliant with the
 *     type of the role used in the ServiceContract.
 * @see IParticipant — §6.4.19 constraint [1] requires the parts of a ServicesArchitecture to be typed by a Participant
 * @see IServiceContract — §6.4.19 cites ServiceContract as the binding mechanism for each use of a service in the architecture
 */
export interface IServicesArchitecture {
  readonly baseCollaborationId: string;
}

// --- 25. IServiceCollaboration (§6.4.5) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §6.4.5
 * @metaclass concrete (profile stereotype)
 * @generalization extends UML::Collaboration
 * @todo upstream-uml — ICollaboration is not yet exported by @amlhubs/uml@^0.0.2;
 *   the heritage clause is omitted and the underlying UML::Collaboration is
 *   referenced via baseCollaborationId : string. Adopt `extends ICollaboration`
 *   when @amlhubs/uml surfaces ICollaboration.
 * @naming The TypeScript interface identifier is `IServiceCollaboration` to
 *   disambiguate from the future @amlhubs/uml `ICollaboration` export. The
 *   SoaML §6.4.5 stereotype's runtime metaClass discriminator remains
 *   'Collaboration' per the SoaMLProfile.xmi <name> element on the
 *   packagedElement xmi:id='SoaML-Collaboration'. Mirrors the same convention
 *   implementer 2 used for IServiceProperty (§6.4.12).
 * @definition Collaboration is extended to indicate whether the role to part
 *   bindings of CollaborationUses typed by a Collaboration are strictly
 *   enforced or not. A Collaboration, ServiceContract, or
 *   ServicesArchitecture represents a pattern of interaction between roles.
 *   This interaction may be informal and loosely defined as in a
 *   requirements sketch. Or it may represent formal agreements or
 *   requirements that must be fulfilled exactly. A Collaboration's isStrict
 *   property establishes the default value of the isStrict property for any
 *   CollaborationUse typed by the Collaboration. Note that as a
 *   ServiceContract is binding on the ServiceInterfaces named in that
 *   contract, a CollaborationUse is not required if the types are
 *   compatible. A Collaboration may have isStrict=true indicating the
 *   collaboration represents a formal interaction between its roles that
 *   all parts playing those roles are intended to follow. If
 *   isStrict=false, then the collaboration represents an informal pattern
 *   of interaction that may be used to document the intended interaction
 *   between parts without specifically requiring parts bound to roles in
 *   CollaborationUses typed by the collaboration to be compatible. The
 *   isStrict property of a Collaboration establishes the default value for
 *   the isStrict property of all CollaborationUses typed by the
 *   Collaboration. A CollaborationUse may have this value changed to
 *   address particular situations.
 * @ownedAttributes
 *   isStrict : Boolean = true -- Indicates whether this Collaboration is
 *     intended to represent a strict pattern of interaction. Establishes the
 *     default value for any CollaborationUse typed by this Collaboration.
 * @associationEnds
 *   base_Collaboration : Collaboration [1] -- the UML Collaboration decorated
 *     by this Collaboration (SoaML §6.4.5) stereotype
 *     (deferred via baseCollaborationId : string until @amlhubs/uml surfaces
 *      ICollaboration)
 * @operations
 *   (none declared in §6.4.5)
 * @constraints
 *   (none — "Constraints: No new constraints")
 */
export interface IServiceCollaboration {
  readonly isStrict: boolean;
  readonly baseCollaborationId: string;
}

// --- 26. ISoamlCollaborationUse (§6.4.6) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §6.4.6
 * @metaclass concrete (profile stereotype)
 * @generalization extends UML::CollaborationUse
 * @todo upstream-uml — ICollaborationUse is not yet exported by @amlhubs/uml@^0.0.2;
 *   the heritage clause is omitted and the underlying UML::CollaborationUse
 *   is referenced via baseCollaborationUseId : string. Adopt
 *   `extends ICollaborationUse` when @amlhubs/uml surfaces ICollaborationUse.
 * @naming The TypeScript interface identifier is `ISoamlCollaborationUse` to
 *   disambiguate from the future @amlhubs/uml `ICollaborationUse` export.
 *   The SoaML §6.4.6 stereotype's runtime metaClass discriminator remains
 *   'CollaborationUse' per the SoaMLProfile.xmi <name> element on the
 *   packagedElement xmi:id='SoaML-CollaborationUse'.
 * @definition CollaborationUse is extended to indicate whether the role to
 *   part bindings are strictly enforced or loose. A CollaborationUse
 *   explicitly indicates the ability of an owning Classifier to fulfill a
 *   ServiceContract or adhere to a ServicesArchitecture. A Classifier may
 *   contain any number of CollaborationUses that indicate what it fulfills.
 *   The CollaborationUse has roleBindings that indicate what role each part
 *   in the owning Classifier plays. If the CollaborationUse is strict, then
 *   the parts must be compatible with the roles they are bound to, and the
 *   owning Classifier must have behaviors that are behaviorally compatible
 *   with the ownedBehavior of the CollaborationUse's Collaboration type.
 *   Note that as a ServiceContract is binding on the ServiceInterfaces
 *   named in that contract, a CollaborationUse is not required if the
 *   types are compatible.
 * @ownedAttributes
 *   isStrict : Boolean -- Indicates whether this particular fulfillment is
 *     intended to be strict. A value of true indicates the roleBindings in
 *     the Fulfillment must be to compatible parts. A value of false
 *     indicates the modeler warrants the part is capable of playing the
 *     role even though the type may not be compatible. The default value is
 *     the value of the isStrict property of Collaboration used as the type
 *     of the CollaborationUse. (No default declared in the SoaMLProfile.xmi
 *     <ownedAttribute xmi:id='SoaML-CollaborationUse-isStrict'>; the
 *     property therefore has unspecified default at the profile level and
 *     resolves at instantiation to the type's isStrict.)
 * @associationEnds
 *   base_CollaborationUse : CollaborationUse [1] -- the UML CollaborationUse
 *     decorated by this CollaborationUse (SoaML §6.4.6) stereotype
 *     (deferred via baseCollaborationUseId : string until @amlhubs/uml
 *      surfaces ICollaborationUse)
 * @operations
 *   (none declared in §6.4.6)
 * @constraints
 *   (none — "Constraints: No new constraints")
 * @semanticVariationPoint Compliance between types named as roles in a
 *   collaboration use is a semantic variation point and will be determined
 *   by modelers or tools.
 */
export interface ISoamlCollaborationUse {
  readonly isStrict: boolean;
  readonly baseCollaborationUseId: string;
}

// --- 27. ISoamlPort (§6.4.11) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §6.4.11
 * @metaclass concrete (profile stereotype)
 * @generalization extends UML::Port
 * @todo upstream-uml — IPort is not yet exported by @amlhubs/uml@^0.0.2;
 *   the heritage clause is omitted and the underlying UML::Port is
 *   referenced via basePortId : string. Adopt `extends IPort` when
 *   @amlhubs/uml surfaces IPort.
 * @naming The TypeScript interface identifier is `ISoamlPort` to
 *   disambiguate from the future @amlhubs/uml `IPort` export. The SoaML
 *   §6.4.11 stereotype's runtime metaClass discriminator remains 'Port' per
 *   the SoaMLProfile.xmi <name> element on the packagedElement
 *   xmi:id='SoaML-Port'.
 * @definition Extends UML Port with a means to indicate whether a
 *   Connection is required on this Port or not. Port is extended with a
 *   connectorRequired property to indicate whether a connector is required
 *   on this port, or the containing classifier may be able to function
 *   without anything connected. Participants may provide many Services and
 *   have many Requests. A Participant may be able to function without all
 *   of its Services being used, and it may be able to function, perhaps
 *   with reduced qualities of service, without a services connected to all
 *   of its Requests. The property connectorRequired set to true on a Port
 *   indicates the Port must be connected to at least one Connector. This is
 *   used to indicate a Service port that must be used, or a Request port
 *   that must be satisfied. A Port with connectorRequired set to false
 *   indicates that no connection is required; the containing Component can
 *   function without interacting with another Component through that Port.
 *   More generally, when connectorRequired is set to true, then all
 *   instances of this Port must have a Connector or ServiceChannel
 *   connected. This is the default situation, and is the same as UML. If
 *   connectorRequired is set to false, then this is an indication that the
 *   containing classifier is able to function, perhaps with different
 *   qualities of service, or using a different implement, without any
 *   Connector connected to the part.
 * @ownedAttributes
 *   connectorRequired : Boolean [0..1] = true -- Indicates whether a
 *     connector is required on this Port or not. The default value is true.
 * @associationEnds
 *   base_Port : Port [1] -- the UML Port decorated by this Port (SoaML
 *     §6.4.11) stereotype
 *     (deferred via basePortId : string until @amlhubs/uml surfaces IPort)
 * @operations
 *   (none declared in §6.4.11)
 * @constraints
 *   (none — "Constraints: No additional constraints")
 */
export interface ISoamlPort {
  readonly connectorRequired: boolean | undefined;
  readonly basePortId: string;
}

// --- 28. IMilestone (§6.4.9) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §6.4.9
 * @metaclass concrete (profile stereotype)
 * @generalization extends UML::Comment
 * @definition A Milestone is a means for depicting progress in behaviors in
 *   order to analyze liveness. Milestones are particularly useful for
 *   behaviors that are long lasting or even infinite. A Milestone depicts
 *   progress by defining a signal that is sent to an abstract observer. The
 *   signal contains an integer value that intuitively represents the amount
 *   of progress that has been achieved when passing a point attached to
 *   this Milestone. Provided that a SoaML specification is available it is
 *   possible to analyze a service behavior (a Participant or a
 *   ServiceContract) to determine properties of the progress value. Such
 *   analysis results could be e.g., that the progress value can never go
 *   beyond a certain value. This could then be interpreted as a measure of
 *   the potential worth of the analyzed behaviors. In situations where
 *   alternative service behaviors are considered as in Agent negotiations,
 *   such a progress measurement could be a useful criterion for the choice.
 *   Milestones can also be applied imperatively as specification of tracing
 *   information in a debugging or monitoring situation. The signal sent
 *   when the Milestone is encountered may contain arguments that can
 *   register any current values. Progress values may be interpreted
 *   ordinally in the sense that a progress value of 4 is higher than a
 *   progress value of 3. A reasonable interpretation would be that the
 *   higher the possible progress value, the better. Alternatively the
 *   progress values may be interpreted nominally as they may represent
 *   distinct reachable situations. In such a case the analysis would have
 *   to consider sets of reachable values. It would typically be a
 *   reasonable interpretation that reaching a superset of values would
 *   constitute better progress possibilities.
 * @ownedAttributes
 *   progress : Integer -- The progress measurement.
 * @associationEnds
 *   signal : Signal [0..1] -- A Signal associated with this Milestone.
 *   value : Expression [*] -- Arguments of the signal when the Milestone is
 *     reached.
 *   base_Comment : Comment [1] -- the UML Comment decorated by this
 *     Milestone stereotype (per SoaMLProfile.xmi <ownedAttribute
 *     xmi:id='SoaML-Milestone-base_Comment'>)
 * @operations
 *   (none declared in §6.4.9)
 * @constraints
 *   (none — "Constraints: No new constraints")
 */
export interface IMilestone extends IComment {
  readonly progress: number;
  readonly signalId: string | undefined;
  readonly valueIds: ReadonlyArray<string>;
  readonly baseCommentId: string;
}

// ─── Cluster 4 — Categorization profile stereotypes (§7.3) ───────────────
// Population:
//  29. IProfileCatalog                 (§7.3.1)   stereotype, decorates UML::Package
//                                                 (profile-tier projection of Cluster 1's metamodel-tier
//                                                  ICatalog; the `Profile` prefix prevents TypeScript
//                                                  identifier collision with Cluster 1's bare ICatalog;
//                                                  runtime metaClass discriminator remains 'Catalog' per
//                                                  the SoaMLProfile.xmi <name>Catalog</name> element on
//                                                  packagedElement xmi:id='SoaML-Catalog')
//  30. IProfileCategorization          (§7.3.2)   stereotype, decorates UML::Dependency
//                                                 (profile-tier projection of Cluster 1's metamodel-tier
//                                                  ICategorization; runtime metaClass discriminator remains
//                                                  'Categorization' per SoaMLProfile.xmi packagedElement
//                                                  xmi:id='SoaML-Categorization' <name>Categorization</name>)
//  31. IProfileCategory                (§7.3.3)   stereotype, decorates UML::Artifact via NodeDescriptor
//                                                 (profile-tier projection of Cluster 1's metamodel-tier
//                                                  ICategory; runtime metaClass discriminator remains
//                                                  'Category' per SoaMLProfile.xmi packagedElement
//                                                  xmi:id='SoaML-Category' <name>Category</name>)
//  32. IProfileCategoryValue           (§7.3.4)   stereotype, decorates UML::ValueSpecification via FreeFormValue
//                                                 (profile-tier projection of Cluster 1's metamodel-tier
//                                                  ICategoryValue; runtime metaClass discriminator remains
//                                                  'CategoryValue' per SoaMLProfile.xmi packagedElement
//                                                  xmi:id='SoaML-CategoryValue' <name>CategoryValue</name>)
//  33. IProfileNodeDescriptor          (§7.3.5)   stereotype (RAS placeholder), decorates UML::Artifact
//                                                 (profile-tier projection of Cluster 1's metamodel-tier
//                                                  INodeDescriptor; runtime metaClass discriminator remains
//                                                  'NodeDescriptor' per SoaMLProfile.xmi packagedElement
//                                                  xmi:id='SoaML-NodeDescriptor' <name>NodeDescriptor</name>)
//  34. IProfileFreeFormDescriptor      (§7.3.5)   stereotype (RAS placeholder), decorates UML::Property
//                                                 (profile-tier projection of Cluster 1's metamodel-tier
//                                                  IFreeFormDescriptor; runtime metaClass discriminator
//                                                  remains 'FreeFormDescriptor' per SoaMLProfile.xmi
//                                                  packagedElement xmi:id='SoaML-FreeFormDescriptor'
//                                                  <name>FreeFormDescriptor</name>)
//  35. IProfileFreeFormValue           (§7.3.5)   stereotype (RAS placeholder), decorates UML::ValueSpecification
//                                                 (profile-tier projection of Cluster 1's metamodel-tier
//                                                  IFreeFormValue; runtime metaClass discriminator remains
//                                                  'FreeFormValue' per SoaMLProfile.xmi packagedElement
//                                                  xmi:id='SoaML-FreeFormValue' <name>FreeFormValue</name>)

// --- 29. IProfileCatalog (§7.3.1) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §7.3.1
 * @metaclass concrete (profile stereotype)
 * @profileSource SoaMLProfile.xmi packagedElement xmi:id='SoaML-Catalog'
 *   <name>Catalog</name>; <generalization><general xmi:idref='SoaML-NodeDescriptor'/></generalization>;
 *   <ownedAttribute xmi:id='SoaML-Catalog-base_Package'> with type
 *   href='http://www.omg.org/spec/UML/20090901/UML.xmi#Package'.
 * @runtimeMetaClass 'Catalog'
 * @generalization decorates UML::Package; specializes IProfileNodeDescriptor
 *   (the spec PDF prints "NoteDescriptor" in §7.3.1 — preserved here as
 *    "NodeDescriptor" to match §7.3.5 RAS Placeholder spelling and the
 *    SoaMLProfile.xmi <general xmi:idref='SoaML-NodeDescriptor'/> reference)
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
 *   base_Package : Package [1] -- the UML Package decorated by this Catalog
 *     stereotype (per SoaMLProfile.xmi <ownedAttribute
 *     xmi:id='SoaML-Catalog-base_Package'>)
 * @operations
 *   (none declared in §7.3.1)
 * @constraints
 *   [1]: Catalogs can only contain Categories, CategoryValues, or other
 *     Catalogs.
 * @semantics When a model Element is categorized with a Category or
 *   CategoryValue, it is effectively placed in the Catalog that contains
 *   that Category. In the case of classification by a CategoryValue, the
 *   Category is the classifier of the CategoryValue. The meaning of being
 *   categorized by a Category, and therefore placed in a Catalog is not
 *   specified by this specification. It can mean whatever the modeler
 *   wishes. That meaning might be suggested by the catalog and category
 *   name, the category's attributes, and a category value's attribute
 *   values. The same model element can be categorized many ways. The same
 *   category or category value may be used to categorize many model
 *   elements.
 * @notation The notation is a Package stereotyped as "Catalog." Tool
 *   vendors are encouraged to provide views and queries that show elements
 *   organized in catalog hierarchies based on how they are categorized.
 */
export interface IProfileCatalog extends IPackage {
  readonly basePackageId: string;
}

// --- 30. IProfileCategorization (§7.3.2) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §7.3.2
 * @metaclass concrete (profile stereotype)
 * @profileSource SoaMLProfile.xmi packagedElement
 *   xmi:id='SoaML-Categorization' <name>Categorization</name>;
 *   <ownedAttribute xmi:id='SoaML-Categorization-base_Dependency'> with
 *   type href='http://www.omg.org/spec/UML/20090901/UML.xmi#Dependency'.
 *   The Extension association is xmi:id='SoaML-Dependency_Categorization'.
 * @runtimeMetaClass 'Categorization'
 * @generalization decorates UML::Dependency
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
 *   base_Dependency : Dependency [1] -- the UML Dependency decorated by
 *     this Categorization stereotype (per SoaMLProfile.xmi <ownedAttribute
 *     xmi:id='SoaML-Categorization-base_Dependency'>)
 * @operations
 *   (none declared in §7.3.2)
 * @constraints
 *   [1]: The target of a Categorization must be either a Category or
 *     CategoryValue.
 * @semantics The primary purpose of Category is to be able to provide
 *   information that characterizes an element by some domain of interest.
 *   Categorizing an element characterizes that element with that Category.
 *   What this means is derived from the meaning of the Category. The
 *   meaning of a Category is defined by its name, owned attributes, or
 *   constraints if any. Categorization of an element may be used to provide
 *   multiple orthogonal ways of organizing elements. UML currently provides
 *   a single mechanism for organizing model elements as PackagedElements
 *   in a Package. This is useful for namespace management and any other
 *   situations where it is necessary for an element to be in one and only
 *   one container at a time. But it is insufficient for organization
 *   across many different dimensions since a PackageableElement can only
 *   be contained in one Package. For example, model elements might also
 *   need to be organized by owner, location, cost gradient, time of
 *   production, status, portfolio, architectural layer, Web, tiers in an
 *   n-tiered application, physical boundary, service partitions, etc.
 *   Different classification hierarchies and Categories may be used to
 *   capture these concerns and be applied to elements to indicate
 *   orthogonal organizational strategies.
 * @notation A Category or CategoryValue may be applied to an Element
 *   Categorization that may be represented as a Dependency with the
 *   "Categorization" stereotype.
 * @changesToUml21 No changes to UML 2.1
 */
export interface IProfileCategorization {
  readonly baseDependencyId: string;
}

// --- 31. IProfileCategory (§7.3.3) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §7.3.3
 * @metaclass concrete (profile stereotype)
 * @profileSource SoaMLProfile.xmi packagedElement xmi:id='SoaML-Category'
 *   <name>Category</name>; <generalization><general
 *   xmi:idref='SoaML-NodeDescriptor'/></generalization>. Category carries
 *   no <ownedAttribute> elements directly — the base_Artifact decoration
 *   is inherited transitively from NodeDescriptor (see IProfileNodeDescriptor).
 * @runtimeMetaClass 'Category'
 * @generalization specializes IProfileNodeDescriptor; transitively decorates
 *   UML::Artifact (per the spec §7.3.3 "Generalizations: NodeDescriptor"
 *   clause and §7.3.5 "NodeDescriptor extends Artifact" RAS placeholder)
 * @definition A classification or division used to characterize the
 *   elements of a catalog and to categorize model elements. A Category is
 *   a piece of information about an element. A Category has a name
 *   indicating what the information is about, and a set of attributes and
 *   constraints that characterize the Category. An Element may have many
 *   Categories, and the same Category can be applied to many Elements.
 *   Categories may be organized into Catalogs hierarchies.
 * @ownedAttributes
 *   (none — "Attributes: No additional attributes")
 * @associationEnds
 *   (inherited from IProfileNodeDescriptor — base_Artifact)
 * @operations
 *   (none declared in §7.3.3)
 * @constraints
 *   [1]: A Category must be contained in a Catalog.
 * @semantics The meaning of a Category is not specified by SoaML. Instead
 *   it may be interpreted by the modeler, viewer of the model, or any
 *   other user for any purpose they wish. For example a Catalog hiearachy
 *   of Categories could be used to indicate shared characteristics used
 *   to group species. In this case the categorization might imply
 *   inheritance and the principle of common descent. Other categorizations
 *   could represent some other taxonomy such as ownership. In this case,
 *   the term categorization is intended to mean describing the
 *   characteristics of something, not necessarily an inheritance hierarchy.
 *   All instances having categorized by a Category have the characteristics
 *   of that Category. The characteristics of a Category are described by
 *   its attributes and constraints. ClassifierValues may be used to
 *   provide specific values for these attributes in order to more
 *   specifically categorize an element. A Category may have ownedRules
 *   representing Constraints that further characterize the category. The
 *   meaning of these constraints when an element is categorized by a
 *   Category is not specified.
 * @notation The notation is an Artifact stereotyped as "Category."
 */
export interface IProfileCategory extends IProfileNodeDescriptor {
}

// --- 32. IProfileCategoryValue (§7.3.4) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §7.3.4
 * @metaclass concrete (profile stereotype)
 * @profileSource SoaMLProfile.xmi packagedElement
 *   xmi:id='SoaML-CategoryValue' <name>CategoryValue</name>;
 *   <generalization><general xmi:idref='SoaML-FreeFormValue'/></generalization>.
 *   CategoryValue carries no <ownedAttribute> elements directly — the
 *   base_ValueSpecification decoration is inherited transitively from
 *   FreeFormValue (see IProfileFreeFormValue).
 * @runtimeMetaClass 'CategoryValue'
 * @generalization specializes IProfileFreeFormValue; transitively decorates
 *   UML::ValueSpecification (per the spec §7.3.4 "Generalizations:
 *   FreeFormValue" clause and §7.3.5 "FreeFormValue extends
 *   ValueSpecification" RAS placeholder)
 * @definition Provides specific values for a Category to further
 *   categorize model elements. A CategoryValue provides values for the
 *   attributes of a Category. It may also be used to categorize model
 *   elements providing detailed information for the category.
 * @ownedAttributes
 *   (none — "Attributes: No additional attributes")
 * @associationEnds
 *   (inherited from IProfileFreeFormValue — base_ValueSpecification)
 * @operations
 *   (none declared in §7.3.4)
 * @constraints
 *   [1]: The classifier for a CategoryValue must be a Category.
 * @semantics The characteristics of a Category are described by its
 *   attributes and constraints. ClassifierValues may be used to provide
 *   specific values for these attributes in order to more specifically
 *   categorize an element. Categorizing an element with a CategoryValue
 *   categorizes the element by the Category that is the classifier of
 *   the CategoryValue.
 * @notation The notation is an InstanceSpecification stereotyped as
 *   "CategoryValue".
 */
export interface IProfileCategoryValue extends IProfileFreeFormValue {
}

// --- 33. IProfileNodeDescriptor (§7.3.5) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §7.3.5
 * @metaclass concrete (profile stereotype, RAS placeholder)
 * @profileSource SoaMLProfile.xmi packagedElement
 *   xmi:id='SoaML-NodeDescriptor' <name>NodeDescriptor</name>;
 *   <ownedAttribute xmi:id='SoaML-NodeDescriptor-base_Artifact'> with
 *   type href='http://www.omg.org/spec/UML/20090901/UML.xmi#Artifact'.
 *   The Extension association is xmi:id='SoaML-Artifact_DescriptorGroup'.
 * @runtimeMetaClass 'NodeDescriptor'
 * @generalization decorates UML::Artifact
 * @todo upstream-uml — IArtifact is not yet exported by @amlhubs/uml@^0.0.2;
 *   the heritage clause is omitted and the underlying UML::Artifact is
 *   referenced via baseArtifactId : string. Adopt `extends IArtifact`
 *   when @amlhubs/uml surfaces IArtifact.
 * @definition The following stereotypes represent placeholders for the
 *   corresponding elements in the OMG Reusable Asset Specification (RAS).
 *   These placeholders are included to provide SoaML integration with
 *   RAS. For further details, see the RAS specification
 *   (http://www.omg.org/spec/RAS/). NodeDescriptor extends Artifact.
 *   There are some differences between SoaML categorization and RAS:
 *     - RAS FreeFormValues are contained in a ClassificationSchema and may
 *       be used individually to classify any asset. SoaML uses Category
 *       ownedAttributes to define Properties of a Category. These
 *       Properties are encapsulated in a Category and cannot be used in
 *       another Category.
 *     - RAS uses a DescriptorGroup to associate a ClassificationSchema and
 *       set of FreeFormValues of FreeFormDescriptors from that
 *       ClassificationSchema to classify an Asset. SoaML uses
 *       Categorization Dependencies to categorize any model Elements.
 * @ownedAttributes
 *   (none declared)
 * @associationEnds
 *   base_Artifact : Artifact [1] -- the UML Artifact decorated by this
 *     NodeDescriptor stereotype (per SoaMLProfile.xmi <ownedAttribute
 *     xmi:id='SoaML-NodeDescriptor-base_Artifact'>)
 * @operations
 *   (none declared in §7.3.5)
 * @constraints
 *   (none declared)
 */
export interface IProfileNodeDescriptor {
  readonly baseArtifactId: string;
}

// --- 34. IProfileFreeFormDescriptor (§7.3.5) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §7.3.5
 * @metaclass concrete (profile stereotype, RAS placeholder)
 * @profileSource SoaMLProfile.xmi packagedElement
 *   xmi:id='SoaML-FreeFormDescriptor' <name>FreeFormDescriptor</name>;
 *   <ownedAttribute xmi:id='SoaML-FreeFormDescriptor-base_Property'> with
 *   type href='http://www.omg.org/spec/UML/20090901/UML.xmi#Property'.
 *   The Extension association is xmi:id='SoaML-Property_FreeFormDescriptor'.
 * @runtimeMetaClass 'FreeFormDescriptor'
 * @generalization decorates UML::Property
 * @definition The following stereotypes represent placeholders for the
 *   corresponding elements in the OMG Reusable Asset Specification (RAS).
 *   These placeholders are included to provide SoaML integration with
 *   RAS. For further details, see the RAS specification
 *   (http://www.omg.org/spec/RAS/). FreeFormDescriptor extends Property.
 *   There are some differences between SoaML categorization and RAS:
 *     - RAS FreeFormValues are contained in a ClassificationSchema and may
 *       be used individually to classify any asset. SoaML uses Category
 *       ownedAttributes to define Properties of a Category. These
 *       Properties are encapsulated in a Category and cannot be used in
 *       another Category.
 *     - RAS uses a DescriptorGroup to associate a ClassificationSchema and
 *       set of FreeFormValues of FreeFormDescriptors from that
 *       ClassificationSchema to classify an Asset. SoaML uses
 *       Categorization Dependencies to categorize any model Elements.
 * @ownedAttributes
 *   (none declared)
 * @associationEnds
 *   base_Property : Property [1] -- the UML Property decorated by this
 *     FreeFormDescriptor stereotype (per SoaMLProfile.xmi <ownedAttribute
 *     xmi:id='SoaML-FreeFormDescriptor-base_Property'>)
 * @operations
 *   (none declared in §7.3.5)
 * @constraints
 *   (none declared)
 */
export interface IProfileFreeFormDescriptor extends IProperty {
  readonly basePropertyId: string;
}

// --- 35. IProfileFreeFormValue (§7.3.5) ---
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §7.3.5
 * @metaclass concrete (profile stereotype, RAS placeholder)
 * @profileSource SoaMLProfile.xmi packagedElement
 *   xmi:id='SoaML-FreeFormValue' <name>FreeFormValue</name>;
 *   <ownedAttribute xmi:id='SoaML-FreeFormValue-base_ValueSpecification'>
 *   with type
 *   href='http://www.omg.org/spec/UML/20090901/UML.xmi#ValueSpecification'.
 *   The Extension association is xmi:id='SoaML-ValueSpecification_FreeFormValue'.
 * @runtimeMetaClass 'FreeFormValue'
 * @generalization decorates UML::ValueSpecification
 * @definition The following stereotypes represent placeholders for the
 *   corresponding elements in the OMG Reusable Asset Specification (RAS).
 *   These placeholders are included to provide SoaML integration with
 *   RAS. For further details, see the RAS specification
 *   (http://www.omg.org/spec/RAS/). FreeFormValue extends ValueSpecification.
 *   There are some differences between SoaML categorization and RAS:
 *     - RAS FreeFormValues are contained in a ClassificationSchema and may
 *       be used individually to classify any asset. SoaML uses Category
 *       ownedAttributes to define Properties of a Category. These
 *       Properties are encapsulated in a Category and cannot be used in
 *       another Category.
 *     - RAS uses a DescriptorGroup to associate a ClassificationSchema and
 *       set of FreeFormValues of FreeFormDescriptors from that
 *       ClassificationSchema to classify an Asset. SoaML uses
 *       Categorization Dependencies to categorize any model Elements.
 * @ownedAttributes
 *   (none declared)
 * @associationEnds
 *   base_ValueSpecification : ValueSpecification [1] -- the UML
 *     ValueSpecification decorated by this FreeFormValue stereotype (per
 *     SoaMLProfile.xmi <ownedAttribute
 *     xmi:id='SoaML-FreeFormValue-base_ValueSpecification'>)
 * @operations
 *   (none declared in §7.3.5)
 * @constraints
 *   (none declared)
 */
export interface IProfileFreeFormValue extends IValueSpecification {
  readonly baseValueSpecificationId: string;
}

// ─── 36. ISoaMLProfile (root, formal/12-05-10) ───────────────────────────────
/**
 * @standard OMG SoaML 1.0.1 -- formal/12-05-10
 * @section §6 (Profile root)
 * @metaclass concrete
 * @generalization extends UML::Profile
 * @definition The SoaML Profile is the OMG-published UML 2 Profile that
 *   declares the full set of SoaML stereotypes (§6.4.1 through §6.4.19) and
 *   the Categorization profile stereotypes (§7.3.1 through §7.3.5). User UML
 *   models apply this Profile to gain Service Oriented Architecture modeling
 *   semantics.
 * @ownedAttributes
 *   (none beyond what UML::Profile declares)
 * @associationEnds
 *   ownedStereotype : Stereotype [0..*]
 * @operations
 *   (none beyond what UML::Profile declares)
 * @constraints
 *   (none additional)
 */
export interface ISoaMLProfile {
  readonly metaClass: 'SoaMLProfile';
  readonly basePackageId: string; // @todo upstream-uml — UML::Profile not yet exported by @amlhubs/uml
  readonly ownedStereotypeIds: ReadonlyArray<string>;
}

// END-SOAML
