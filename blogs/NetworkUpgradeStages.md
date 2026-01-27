---
title: "How Ethereum Decides What Ships"
date: 2026-01-27
author: Akash Kshirsagar & Pooja Ranjan
image: https://github.com/ethcatherders/ech-blog/blob/main/blogs/images/NetworkUpgrade.webp
---

## Inside the EIP-7723 Inclusion Lifecycle  

For years, selecting which changes make it into an Ethereum network upgrade (“hard fork”) was a complex and often ad-hoc process. With nearly ten client teams coordinating implementations, the absence of formal inclusion stages led to duplicated effort, wasted development cycles, and coordination friction.

**[EIP-7723](https://eips.ethereum.org/EIPS/eip-7723)**, authored by Tim Beiko and Alex Stokes, formalizes how Ethereum Improvement Proposals (EIPs) move through upgrade planning. It introduces clearer signaling, stronger prioritization, and more predictable coordination across the ecosystem.

At its core, EIP-7723 makes the upgrade process more legible for both contributors and the broader community.

<iframe width="560" height="315" src="https://youtu.be/-S4blFZl28g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## The Problem: “Included” or “Unknown”

Historically, Ethereum governance lacked granular indicators of proposal maturity. There was effectively one meaningful state - **“Included”**.

Without intermediate stages:
- Developers reviewed dozens of proposals simultaneously.  
- It was difficult to distinguish early ideas from implementation-ready work.  
- Coordination across client teams became inefficient.  

As Tim Beiko notes, deploying an EIP to mainnet is high-stakes because **“the blockchain has to keep it forever.”** Clear staging improves safety and decision quality.

## The Solution: The EIP-7723 Inclusion Lifecycle

EIP-7723 defines five stages that apply to a single network upgrade. Together, they form a pipeline that progressively filters proposals from ideas into production-ready protocol changes.

### Inclusion Stages Overview

| Stage | Description | Criteria | Signals |
|------------|-------------------------------|-----------------------------|-----------------------------|
| **Proposed for Inclusion** | Authors propose an EIP by opening a pull request to add it to the upgrade’s Meta EIP. | EIP is merged in **Draft** status. | • Community interest only<br>• No implementation commitment<br>• Must be re-submitted if declined |
| **Considered for Inclusion (CFI)** | Client teams agree the proposal is technically viable and worth advancing. | Proposal reviewed and accepted for further exploration. | • Concept acknowledgment<br>• Expected in future upgrade devnets<br>• Not a guarantee of mainnet inclusion |
| **Scheduled for Inclusion (SFI)** | Client developers commit to implementation and devnet testing. | Python implementation and tests exist in `execution-specs`. | • Active implementation underway<br>• High confidence of shipping unless blockers arise<br>• Added to devnet specifications |
| **Included** | Applied retroactively after successful mainnet activation. | Upgrade successfully activated on mainnet. | • Feature live in production<br>• Meta EIP retains only the Included list |
| **Declined for Inclusion** | Client developers remove the EIP from the current upgrade. | Decision to defer from the current cycle. | • Work pauses for the cycle<br>• Focus shifts to higher priorities<br>• May return in future upgrades |

## The Role of Devnets

**Upgrade devnets** validate client interoperability before mainnet deployment.

The CFI → SFI transition aligns proposals with devnet readiness:

- **Sequencing:** SFI defines devnet priorities.  
- **Risk control:** Only mature proposals should enter devnets to avoid churn and instability.

## Broader Governance Improvements

Meeting structure now supports this lifecycle:

- **ACDE / ACDC:** Strategy and upgrade scope  
- **ACDT:** Implementation, devnets, and testing  

This separation improves signal quality and reduces coordination noise.

## Conclusion

EIP-7723 represents a maturation of Ethereum governance. By clearly separating exploration from commitment, client teams can narrow hundreds of proposals into a safe, deployable set.

As Tim summarizes, the process emphasizes **“the quality of the decision rather than the quantity.”** The result is a more predictable, transparent, and resilient upgrade pipeline for the ecosystem.

Learn more with [PEEPanEIP-7723](https://youtu.be/Ay6-RywzZQg).
