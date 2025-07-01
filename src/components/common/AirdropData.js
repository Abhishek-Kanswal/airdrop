import humanityLogo from "../../assets/icon/tier-1/humanity.png";
import unionLogo from "../../assets/icon/tier-1/union.png";
import megaEthLogo from "../../assets/icon/tier-1/mega-eth.png";
import monadLogo from "../../assets/icon/tier-1/monad.png";
import saharaLogo from "../../assets/icon/tier-1/sahara.png";
import somniaLogo from "../../assets/icon/tier-1/somnia.png";
import arciumLogo from "../../assets/icon/tier-2/arcium.png";
import billionsLogo from "../../assets/icon/tier-2/billions_network.png";
import newtonLogo from "../../assets/icon/tier-2/newton.png";
import signLogo from "../../assets/icon/tier-2/sign.png";
import yalaLogo from "../../assets/icon/tier-2/yala.png";
import archLogo from "../../assets/icon/tier-2/arch_network.png";
import lineraLogo from "../../assets/icon/tier-2/linera.png";
import switchBoardLogo from "../../assets/icon/tier-2/switch_board.jpg";
import fractionAILogo from "../../assets/icon/tier-2/fraction_ai.png";
import oneFootballLogo from "../../assets/icon/tier-2/one_football.png";
import pipeLogo from "../../assets/icon/tier-2/pipe.png";
import openGradientLogo from "../../assets/icon/tier-2/open_gradient.png";
import haustNetworkLogo from "../../assets/icon/tier-3/haust_network.png";
import gizaLogo from "../../assets/icon/tier-3/giza.png";
import momentumLogo from "../../assets/icon/tier-3/momentum.png";
import bit77HubLogo from "../../assets/icon/tier-3/bit77_hub.jpg";
import xosLogo from "../../assets/icon/tier-3/xos.jpg";
import pharosLogo from "../../assets/icon/tier-2/pharos.png";
import zamaLogo from "../../assets/icon/tier-2/zama.jpg";
import mawariLogo from "../../assets/icon/tier-2/mawari.jpg";
import gteLogo from "../../assets/icon/tier-2/gte.jpg";
import irysLogo from "../../assets/icon/tier-2/irys.jpg";
import pushchainLogo from "../../assets/icon/tier-2/pushchain.jpg";
import openseaLogo from "../../assets/icon/tier-2/opensea.jpg";
import symbioticLogo from "../../assets/icon/tier-2/symbiotic.png";
import campnetworkLogo from "../../assets/icon/tier-2/camp_network.png";

const airdropData = {"Monad": {
    name: "Monad",
    type: "EVM-Compatible L1",
    status: "live",
    logo: monadLogo,
    website: "https://testnet.monad.xyz/",
    x: "https://x.com/monad_xyz",
    funding: "$244.00M",
    backers: ["Dragonfly", "Lemniscap"],
    details: "Monad is a Layer 1 blockchain platform designed to address scalability issues in the crypto ecosystem while maintaining compatibility with Ethereum. It offers full EVM (Ethereum Virtual Machine) compatibility, allowing developers to easily port existing Ethereum applications and smart contracts without modification.",
    tasks: {
      task1: {
        name: "Testnet Access",
        status: true,
        date: "2025-03-31",
        link: "https://testnet.monad.xyz/"
      }
    }
  },
  "Zama": {
    name: "Zama",
    type: "Confidential Blockchain Protocol",
    status: "live",
    logo: zamaLogo,
    website: "https://www.zama.ai/",
    x: "https://x.com/zama_fhe",
    funding: "$130.00M",
    backers: ["Pantera Capital", "Blockchange Ventures"],
    details: "The Zama Confidential Blockchain Protocol enables confidential smart contracts on top of any L1 or L2 using FHE.",
    tasks: {
      task1: {
        name: "Testnet",
        status: true,
        date: "2025-07-01",
        link: "https://dapps.zama.ai/"
      }
    }
  },
  "Mega ETH": {
    name: "Mega ETH",
    type: "Ethereum Scaling",
    status: "live",
    logo: megaEthLogo,
    website: "https://testnet.megaeth.com/",
    x: "https://x.com/MegaETH_",
    funding: "$37.73M",
    backers: ["Dragonfly Capital", "Paradigm"],
    details: "MegaETH is a Layer 2 blockchain designed to enhance the scalability and performance of Ethereum by enabling real-time transaction processing. It is compatible with the Ethereum Virtual Machine (EVM). MegaETH aims to achieve unprecedented performance levels, capable of processing over 100,000 transactions per second (TPS).",
    tasks: {
      task1: {
        name: "Testnet Interaction",
        status: true,
        date: "2025-03-31",
        link: "https://testnet.megaeth.com/"
      }
    }
  },
  "Pharos": {
    name: "Pharos",
    type: "L-1 Chain",
    status: "live",
    logo: pharosLogo,
    website: "https://pharosnetwork.xyz/",
    x: "https://x.com/pharos_network",
    funding: "$8.00M",
    backers: ["Hack VC", "MH Ventures"],
    details: "Fastest EVM-Compatible Layer 1 for RWAs & Cross-chain Liquidity.",
    tasks: {
      task1: {
        name: "Testnet",
        status: true,
        date: "2025-05-07",
        link: "https://testnet.pharosnetwork.xyz/experience"
      }
    }
  },
  "Mawari": {
    name: "Mawari",
    type: "Compute Network",
    status: "live",
    logo: mawariLogo,
    website: "https://mawari.net/",
    x: "https://x.com/mawariXR",
    funding: "$17.30M",
    backers: ["Hack VC", "MH Ventures"],
    details: "The Mawari Network powers real-time streaming of immersive, AI-powered experiences, with close to zero latency, globally.",
    tasks: {
      task1: {
        name: "Testnet",
        status: true,
        date: "2025-06-26",
        link: "https://portal.mawari.net"
      }
    }
  },
  "Irys": {
    name: "Irys",
    type: "Blockchain Infrastructure",
    status: "live",
    logo: irysLogo,
    website: "https://irys.xyz/",
    x: "https://x.com/irys_xyz",
    funding: "$8.90M",
    backers: [],
    details: "Other data networks only store data does too but faster, cheaper, and with a native execution layer that makes data programmable",
    tasks: {
      task1: {
        name: "Galxe Quest",
        status: true,
        date: "2025-05-28",
        link: "https://app.galxe.com/quest/Irys"
      }
    }
  },
  "GTE": {
    name: "GTE",
    type: "DeFi",
    status: "live",
    logo: gteLogo,
    website: "https://www.gte.xyz/",
    x: "https://x.com/GTE_XYZ",
    funding: "$25.94M",
    backers: ["Paradigm"],
    details: "Fastest EVM-Compatible Layer 1 for RWAs & Cross-chain Liquidity",
    tasks: {
      task1: {
        name: "Testnet",
        status: true,
        date: "2025-03-21",
        link: "https://testnet.gte.xyz/"
      }
    }
  },
  "Momentum": {
    name: "Momentum",
    type: "DeFi Options",
    status: "live",
    logo: momentumLogo,
    website: "https://app.mmt.finance/trade",
    x: "https://x.com/MMTFinance",
    funding: "$10.00M",
    backers: [],
    details: "Momentum is a multi-signature, non-custodial digital asset management solution built on the Move programming language, which is designed for blockchain applications where safety and correctness are crucial.",
    tasks: {
      task1: {
        name: "Community Join",
        status: true,
        date: "2025-03-31",
        link: "https://app.mmt.finance/trade"
      }
    }
  },
  "OpenSea": {
    name: "OpenSea",
    type: "NFT Marketplace",
    status: "live",
    logo: openseaLogo,
    website: "https://opensea.io/",
    x: "https://x.com/pharos_network",
    funding: "$425.15M",
    backers: ["Andreessen Horowitz (a16z) ","Paradigm","Y Combinator", "Coinbase Ventures","Balaji Srinivasan", "Blockchain Capital"],
    details: "OpenSea is an NFT marketplace that enables users to discover, collect, and sell blockchain-based digital assets.",
    tasks: {
      task1: {
        name: "XP Rewards",
        status: true,
        date: "2025-05-29",
        link: "https://opensea.io/rewards"
      }
    }
  },
  "Humanity Protocol": {
    name: "Humanity Protocol",
    type: "Identity Verification",
    status: "ended",
    logo: humanityLogo,
    website: "https://testnet.humanity.org/dashboard",
    x: "https://x.com/humanityprot",
    funding: "$50M",
    backers: ["Animoca Brands", "Polygon Ventures"],
    details: "https://cryptorank.io/drophunting/humanity-protocol-activity439",
    tasks: {
      task1: {
        name: "Testnet Participation",
        status: true,
        date: "2025-03-31",
        link: "https://testnet.humanity.org/dashboard"
      }
    }
  },
  "Sahara Ai": {
    name: "Sahara Ai",
    type: "AI Training Platform",
    status: "ended",
    logo: saharaLogo,
    website: "https://legends.saharalabs.ai/",
    x: "https://x.com/SaharaLabsAI",
    funding: "$51.50M",
    backers: ["Polychain Capital", "Symbolic Capital"],
    details: "https://cryptorank.io/drophunting/sahara-activity601",
    tasks: {
      task1: {
        name: "Legends Program",
        status: true,
        date: "2025-03-31",
        link: "https://legends.saharalabs.ai/"
      }
    }
  },
  "OneFootball": {
    name: "OneFootball",
    type: "Sports Metaverse",
    status: "live",
    logo: oneFootballLogo,
    website: "https://ofc.onefootball.com/s2/",
    x: "https://x.com/OneFootball",
    funding: "$307.00M",
    backers: [],
    details: "OneFootball is a football media platform that provides extensive coverage and content from hundreds of leagues and competitions around the globe.",
    tasks: {
      task1: {
        name: "S2 Campaign",
        status: true,
        date: "2025-03-31",
        link: "https://ofc.onefootball.com/s2/"
      }
    }
  },
  "Billions Network": {
    name: "Billions Network",
    type: "Web3 Infrastructure",
    status: "live",
    logo: billionsLogo,
    website: "https://signup.billions.network/",
    x: "https://x.com/billions_ntwk",
    funding: "",
    backers: [],
    details: "Billions network is a global network that integrates humans and AI using zero-knowledge proofs for enhanced privacy and trust.",
    tasks: {
      task1: {
        name: "Sign Up",
        status: true,
        date: "2025-03-31",
        link: "https://signup.billions.network/"
      }
    }
  },
  "Pushchain": {
    name: "Pushchain",
    type: "Blockchain Service",
    status: "live",
    logo: pushchainLogo,
    website: "https://push.org/",
    x: "https://x.com/PushChain",
    funding: "$11.97M",
    backers: ["YZi Labs (Prev. Binance Labs)"],
    details: "Push is a web3 communication protocol that provides decentralized notifications, messaging, and more for apps, wallets, and services.",
    tasks: {
      task1: {
        name: "Devnet Drop S2",
        status: true,
        date: "2025-03-20",
        link: "https://portal.push.org/rewards"
      }
    }
  },
  "Union": {
    name: "Union",
    type: "Interoperability Protocol",
    status: "live",
    logo: unionLogo,
    website: "",
    x: "https://x.com/union_build",
    funding: "$16.00M",
    backers: ["a16z Crypto", "Coinbase Ventures"],
    details: "Union is a modular interoperability protocol which facilitates the exchange of assets and messages between blockchains & dApps.",
    tasks: {
      task1: {
        name: "Testnet",
        status: true,
        date: "2025-03-31",
        link: "https://app.union.build/"
      }
    }
  },
  "Camp Network": {
    name: "Camp Network",
    type: "NFT Marketplace",
    status: "live",
    logo: campnetworkLogo,
    website: "https://www.campnetwork.xyz/",
    x: "https://x.com/campnetworkxyz",
    funding: "$29.00M",
    backers: [],
    details: "Camp Network is a Layer-1 blockchain project focused on modernizing intellectual property (IP) infrastructure and enabling the next generation of AI agents to operate on verifiable IP.",
    tasks: {
      task1: {
        name: "Incentivized Testnet",
        status: true,
        date: "2025-05-08",
        link: "https://testnet.campnetwork.xyz/"
      }
    }
  },
  "Somnia": {
    name: "Somnia",
    type: "Metaverse Protocol",
    status: "live",
    logo: somniaLogo,
    website: "https://testnet.somnia.network/",
    x: "https://x.com/Somnia_Network",
    funding: "$270M",
    backers: [],
    details: "Somnia is the fastest EVM-compatible layer one blockchain for a fully onchain world",
    tasks: {
      task1: {
        name: "Testnet Activities",
        status: true,
        date: "2025-03-31",
        link: "https://testnet.somnia.network/"
      }
    }
  },
  "Arcium": {
    name: "Arcium",
    type: "Confidential Computing",
    status: "live",
    logo: arciumLogo,
    website: "https://gmpcworld.webflow.io/vote-now",
    x: "https://x.com/ArciumHQ",
    funding: "$14.00M",
    backers: ["Greenfield Capital", "Lemniscap"],
    details: "Arcium is a parallelized confidential computing network that offers developers and applications a trustless, verifiable, and efficient framework for running encrypted computations.",
    tasks: {
      task1: {
        name: "Voting Participation",
        status: true,
        date: "2025-03-31",
        link: "https://gmpcworld.webflow.io/vote-now"
      }
    }
  },
  "Newton": {
    name: "Newton",
    type: "Blockchain Explorer",
    status: "ended",
    logo: newtonLogo,
    website: "https://www.magicnewton.com/portal",
    x: "https://x.com/MagicNewton",
    funding: "",
    backers: [],
    details: "https://airdrops.io/newton/",
    tasks: {
      task1: {
        name: "Portal Access",
        status: true,
        date: "2025-03-31",
        link: "https://www.magicnewton.com/portal"
      }
    }
  },
  "Sign": {
    name: "Sign",
    type: "Digital Signatures",
    status: "ended",
    logo: signLogo,
    website: "https://sign.global/orange-dynasty",
    x: "https://x.com/ethsign",
    funding: "",
    backers: [],
    details: "https://cryptorank.io/ico/ethsign#funding-rounds",
    tasks: {
      task1: {
        name: "Orange Dynasty",
        status: true,
        date: "2025-03-31",
        link: "https://sign.global/orange-dynasty"
      }
    }
  },
  "Yala": {
    name: "Yala",
    type: "SocialFi Platform",
    status: "ended",
    logo: yalaLogo,
    website: "https://app-testnet-v3.yala.org/",
    x: "https://x.com/yalaorg",
    funding: "",
    backers: [],
    details: "https://cryptorank.io/drophunting/yala-activity469",
    tasks: {
      task1: {
        name: "Testnet V3",
        status: true,
        date: "2025-03-31",
        link: "https://app-testnet-v3.yala.org/"
      }
    }
  },
  "Arch Network": {
    name: "Arch Network",
    type: "ZK-Rollups",
    status: "ended",
    logo: archLogo,
    website: "https://dashboard.arch.network/",
    x: "https://x.com/ArchNtwrk",
    funding: "",
    backers: [],
    details: "https://cryptorank.io/drophunting/arch-network-activity491",
    tasks: {
      task1: {
        name: "Dashboard Access",
        status: true,
        date: "2025-03-31",
        link: "https://dashboard.arch.network/"
      }
    }
  },
  "Linera": {
    name: "Linera",
    type: "Microchains Protocol",
    status: "live",
    logo: lineraLogo,
    website: "",
    x: "https://x.com/linera_io",
    funding: "$12.00M",
    backers: [],
    details: "Linera is a blockchain infrastructure that aims to support the most demanding Web3 applications by providing them with predictable performance, security, and responsiveness at the Internet scale.",
    tasks: {
      task1: {
        name: "Testnet Babbage",
        status: true,
        date: "2025-04-17",
        link: "https://drops.linera.io/home?ext_id=5oqo4TUSG"
      }
    }
  },
  "SwitchBoard": {
    name: "SwitchBoard",
    type: "Oracle Network",
    status: "ended",
    logo: switchBoardLogo,
    website: "",
    x: "https://x.com/switchboardxyz",
    funding: "",
    backers: [],
    details: "",
    tasks: {
      task1: {
        name: "Community Join",
        status: true,
        date: "2025-03-31",
        link: ""
      }
    }
  },
  "Fraction Ai": {
    name: "Fraction Ai",
    type: "NFT Fractionalization",
    status: "ended",
    logo: fractionAILogo,
    website: "https://fractionai.xyz/dapp",
    x: "https://x.com/FractionAI_xyz",
    funding: "",
    backers: [],
    details: "https://cryptorank.io/drophunting/fraction-ai-activity600",
    tasks: {
      task1: {
        name: "Missions",
        status: true,
        date: "2025-03-31",
        link: "https://fractionai.xyz/dapp"
      }
    }
  },
  "Pipe": {
    name: "Pipe",
    type: "Liquid Staking",
    status: "ended",
    logo: pipeLogo,
    website: "",
    x: "https://x.com/pipenetwork",
    funding: "",
    backers: [],
    details: "https://cryptorank.io/drophunting/pipe-network-activity424",
    tasks: {
      task1: {
        name: "Community Join",
        status: true,
        date: "2025-03-31",
        link: ""
      }
    }
  },
  "Open Gradient": {
    name: "Open Gradient",
    type: "AI Data Marketplace",
    status: "ended",
    logo: openGradientLogo,
    website: "",
    x: "https://x.com/OpenGradient",
    funding: "",
    backers: [],
    details: "https://cryptorank.io/drophunting/opengradient-activity466",
    tasks: {
      task1: {
        name: "Community Join",
        status: true,
        date: "2025-03-31",
        link: ""
      }
    }
  },
  "Haust": {
    name: "Haust",
    type: "Social Network",
    status: "ended",
    logo: haustNetworkLogo,
    website: "",
    x: "https://x.com/HaustNetwork",
    funding: "",
    backers: [],
    details: "https://cryptorank.io/price/haust-network",
    tasks: {
      task1: {
        name: "Community Join",
        status: true,
        date: "2025-03-31",
        link: ""
      }
    }
  },
  "Giza": {
    name: "Giza",
    type: "AI Oracle",
    status: "ended",
    logo: gizaLogo,
    website: "https://giza.megaphone.xyz/campaign",
    x: "https://x.com/gizatechxyz",
    funding: "",
    backers: [],
    details: "",
    tasks: {
      task1: {
        name: "Campaign",
        status: true,
        date: "2025-03-31",
        link: "https://giza.megaphone.xyz/campaign"
      }
    }
  },
  "Bit77Hub": {
    name: "Bit77Hub",
    type: "Crypto Exchange",
    status: "ended",
    logo: bit77HubLogo,
    website: "https://bithub.77-bit.com/",
    x: "https://x.com/the77bit",
    funding: "",
    backers: [],
    details: "",
    tasks: {
      task1: {
        name: "Hub Access",
        status: true,
        date: "2025-03-31",
        link: "https://bithub.77-bit.com/"
      }
    }
  },
  "XOS": {
    name: "XOS",
    type: "Layer1 Blockchain",
    status: "ended",
    logo: xosLogo,
    website: "https://x.ink/airdrop",
    x: "https://x.com/xos_labs",
    funding: "",
    backers: [],
    details: "",
    tasks: {
      task1: {
        name: "Airdrop Claim",
        status: true,
        date: "2025-03-31",
        link: "https://x.ink/airdrop"
      }
    }
  },
  "Symbiotic": {
    name: "Symbiotic",
    type: "L-1 Chain",
    status: "live",
    logo: symbioticLogo,
    website: "https://pharosnetwork.xyz/",
    x: "https://x.com/pharos_network",
    funding: "$34.80M",
    backers: ["Hack VC", "MH Ventures"],
    details: "Fastest EVM-Compatible Layer 1 for RWAs & Cross-chain Liquidity",
    tasks: {
      task1: {
        name: "Galxe Quest",
        status: true,
        date: "2025-03-31",
        link: "https://testnet.pharosnetwork.xyz/experience"
      }
    }
  },
};

export default airdropData;