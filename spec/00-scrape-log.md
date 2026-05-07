# SoaML 1.0.1 — OMG Normative Artifact Scrape Log

**Scrape date:** 2026-05-07
**Spec version:** SoaML 1.0.1 (formal/12-05-10)
**Source organization:** Object Management Group (OMG)
**Landing page:** https://www.omg.org/spec/SoaML/1.0.1/

## Mandatory Artifacts

| # | Artifact | Source URL | Local Filename | Bytes | HTTP | SHA256 |
|---|---|---|---|---:|:---:|---|
| 1 | Spec landing page (HTML) | https://www.omg.org/spec/SoaML/1.0.1/ | `spec-landing-page.html` | 75473 | 200 | `746cc8d46093c044029e136548ce72f56dadd968d014167f0f92ad01780eb447` |
| 2 | Specification document (PDF) | https://www.omg.org/spec/SoaML/1.0.1/PDF | `formal-12-05-10.pdf` | 2959924 | 200 | `96efa264398a0bd58404fac25b49ccdc53eb166630fe958cdb47be90f07514f4` |
| 3 | Metamodel XMI (ptc/12-05-02) | https://www.omg.org/spec/SoaML/20120501/SoaMLMetamodel.xmi | `SoaMLMetamodel.xmi` | 144068 | 200 | `a900494d39c7b78913d000698eee18b4e42aad1b466a8bf8e8fa7c2e83e3fcfc` |
| 4 | Profile XMI (ptc/12-05-03) | https://www.omg.org/spec/SoaML/20120501/SoaMLProfile.xmi | `SoaMLProfile.xmi` | 62612 | 200 | `74a47c56bb332e4924e9abf9897b86a40a6d8374ff210524cb8723addda26df7` |

## Supplementary Metadata Descriptors (discovered on landing page)

| # | Artifact | Source URL | Local Filename | Bytes | HTTP | SHA256 |
|---|---|---|---|---:|:---:|---|
| 5 | About-SoaML descriptor (HTML) | https://www.omg.org/spec/SoaML/1.0.1/About-SoaML | `About-SoaML` | 75473 | 200 | `ad33c7d4ae2f49c3155c62a33950235b35ca36f9d0f99d398410fec39ddbff60` |
| 6 | About-SoaML descriptor (RDF/XML) | https://www.omg.org/spec/SoaML/1.0.1/About-SoaML.rdf | `About-SoaML.rdf` | 5354 | 200 | `d4c80b48177e3177d2e34409b48582fa66801161cdf8f0dfe4a5407fe67245a5` |
| 7 | About-SoaML descriptor (JSON-LD) | https://www.omg.org/spec/SoaML/1.0.1/About-SoaML.jsonld | `About-SoaML.jsonld` | 3943 | 200 | `90a884515142237a51d22b026cd8b2eb55f52e0130aa4acd8698bd9a1cd2cce3` |

## Verification Results

- `formal-12-05-10.pdf` — magic bytes `%PDF-1.4`, 97 pages — VALID
- `SoaMLProfile.xmi` — magic bytes `<?xml version="1.0"`, ASCII XML — VALID
- `SoaMLMetamodel.xmi` — magic bytes `PK..` (ZIP archive) — see anomaly below
- All 7 files non-empty; all HTTP statuses 200; no retries required

## Anomalies

1. **`SoaMLMetamodel.xmi` is a ZIP archive, not raw XML.** OMG publishes the metamodel as a ZIP-packaged Eclipse project bundle at this URL — `file(1)` reports `Zip archive data, at least v2.0 to extract, compression method=deflate` and the first 8 bytes contain a `proxy.local__PROJECT` member name. The OMG-published filename (`SoaMLMetamodel.xmi`) is preserved verbatim as instructed; consumers wishing to access the underlying XMI must unzip the archive first. No transformation is performed at the scrape stage.
2. **Landing-page `About-SoaML` (without extension) returns the same HTML body as the landing page** but with a different SHA256 (likely due to Last-Modified or generated-timestamp differences in the response). Both are kept because they are authoritative OMG metadata endpoints.

## Discovery Notes

The landing page (`spec-landing-page.html`) was parsed for supplementary `.xmi`, `.xml`, `.zip`, `.mof`, `.ocl`, `.pdf`, `.xsd` artifacts beyond the four mandatory ones. Only the three About-SoaML descriptors and the four mandatory artifacts are referenced from the SoaML 1.0.1 page; no per-package metamodel pieces, OCL constraint files, or normative XML schemas are linked. The 1.0 superseded version's deltas are explicitly out of scope.

## Out-of-Scope (intentionally not scraped)

- `https://www.omg.org/spec/SoaML/1.0/` — superseded version
- `https://www.omg.org/members/spec/SoaML/1.0.1` — member-only mirror
- `https://issues.omg.org/issues/spec/SoaML*` — issue tracker (non-normative)
