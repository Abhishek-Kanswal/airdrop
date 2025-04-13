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
import recallLabLogo from "../../assets/icon/tier-3/recall_lab.png";
import haustNetworkLogo from "../../assets/icon/tier-3/haust_network.png";
import gizaLogo from "../../assets/icon/tier-3/giza.png";
import momentumLogo from "../../assets/icon/tier-3/momentum.png";
import bit77HubLogo from "../../assets/icon/tier-3/bit77_hub.jpg";
import xosLogo from "../../assets/icon/tier-3/xos.jpg";

const airdropData = {
  "Humanity Protocol": {
    name: "Humanity Protocol",
    type: "Identity Verification",
    status: true,
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
  "Union": {
    name: "Union",
    type: "Interoperability Protocol",
    status: true,
    logo: unionLogo,
    website: "",
    x: "https://x.com/union_build",
    funding: "$12M",
    backers: ["a16z Crypto", "Coinbase Ventures"],
    details: "https://cryptorank.io/drophunting/union-labs-activity250",
    tasks: {
      task1: {
        name: "Join Waitlist",
        status: true,
        date: "2025-03-31",
        link: ""
      }
    }
  },
  "Mega ETH": {
    name: "Mega ETH",
    type: "Ethereum Scaling",
    status: true,
    logo: megaEthLogo,
    website: "https://testnet.megaeth.com/",
    x: "https://x.com/MegaETH_",
    funding: "$57.73M",
    backers: ["Dragonfly Capital", "Paradigm"],
    details: "https://cryptorank.io/drophunting/megaeth-activity254",
    tasks: {
      task1: {
        name: "Testnet Interaction",
        status: true,
        date: "2025-03-31",
        link: "https://testnet.megaeth.com/"
      }
    }
  },
  "Monad": {
    name: "Monad",
    type: "EVM-Compatible L1",
    status: true,
    logo: monadLogo,
    website: "https://testnet.monad.xyz/",
    x: "https://x.com/monad_xyz",
    funding: "$19M",
    backers: ["Dragonfly", "Lemniscap"],
    details: "https://cryptorank.io/drophunting/monad-activity213",
    tasks: {
      task1: {
        name: "Testnet Access",
        status: true,
        date: "2025-03-31",
        link: "https://testnet.monad.xyz/"
      }
    }
  },
  "Sahara Ai": {
    name: "Sahara Ai",
    type: "AI Training Platform",
    status: true,
    logo: saharaLogo,
    website: "https://legends.saharalabs.ai/",
    x: "https://x.com/SaharaLabsAI",
    funding: "$6M",
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
  "Somnia": {
    name: "Somnia",
    type: "Metaverse Protocol",
    status: true,
    logo: somniaLogo,
    website: "https://testnet.somnia.network/",
    x: "https://x.com/Somnia_Network",
    funding: "$270M",
    backers: [],
    details: "https://blog.somnia.network/270m-in-capital-to-fuel-innovation",
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
    status: false,
    logo: arciumLogo,
    website: "https://gmpcworld.webflow.io/vote-now",
    x: "https://x.com/ArciumHQ",
    funding: "$5.5M",
    backers: ["Greenfield Capital", "Lemniscap"],
    details: "https://cryptorank.io/drophunting/elusiv-activity392",
    tasks: {
      task1: {
        name: "Voting Participation",
        status: true,
        date: "2025-03-31",
        link: "https://gmpcworld.webflow.io/vote-now"
      }
    }
  },
  "Billions Network": {
    name: "Billions Network",
    type: "Web3 Infrastructure",
    status: true,
    logo: billionsLogo,
    website: "https://signup.billions.network/",
    x: "https://x.com/billions_ntwk",
    funding: "",
    backers: [],
    details: "https://cryptorank.io/drophunting/billions-network-activity707",
    tasks: {
      task1: {
        name: "Sign Up",
        status: true,
        date: "2025-03-31",
        link: "https://signup.billions.network/"
      }
    }
  },
  "Newton": {
    name: "Newton",
    type: "Blockchain Explorer",
    status: true,
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
    status: false,
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
    status: false,
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
    status: true,
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
    status: false,
    logo: lineraLogo,
    website: "",
    x: "https://x.com/linera_io",
    funding: "",
    backers: [],
    details: "https://cryptorank.io/drophunting/linera-activity286",
    tasks: {
      task1: {
        name: "Community Join",
        status: true,
        date: "2025-03-31",
        link: ""
      }
    }
  },
  "SwitchBoard": {
    name: "SwitchBoard",
    type: "Oracle Network",
    status: false,
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
    status: true,
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
  "OneFootball": {
    name: "OneFootball",
    type: "Sports Metaverse",
    status: true,
    logo: oneFootballLogo,
    website: "https://ofc.onefootball.com/s2/",
    x: "https://x.com/OneFootball",
    funding: "",
    backers: [],
    details: "https://cryptorank.io/drophunting/onefootballcom-activity241",
    tasks: {
      task1: {
        name: "S2 Campaign",
        status: true,
        date: "2025-03-31",
        link: "https://ofc.onefootball.com/s2/"
      }
    }
  },
  "Pipe": {
    name: "Pipe",
    type: "Liquid Staking",
    status: false,
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
    status: false,
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
  "Recall Lab": {
    name: "Recall Lab",
    type: "Decentralized Storage",
    status: true,
    logo: recallLabLogo,
    website: "https://boost.absinthe.network/recall/account",
    x: "https://x.com/recallnet",
    funding: "",
    backers: [],
    details: "https://cryptorank.io/drophunting/ceramic-network-activity743",
    tasks: {
      task1: {
        name: "Account Setup",
        status: true,
        date: "2025-03-31",
        link: "https://boost.absinthe.network/recall/account"
      }
    }
  },
  "Haust": {
    name: "Haust",
    type: "Social Network",
    status: false,
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
    status: false,
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
  "Momentum": {
    name: "Momentum",
    type: "DeFi Options",
    status: true,
    logo: momentumLogo,
    website: "https://app.mmt.finance/trade",
    x: "https://x.com/MMTFinance",
    funding: "",
    backers: [],
    details: "https://cryptorank.io/drophunting/momentum-finance-activity695",
    tasks: {
      task1: {
        name: "Community Join",
        status: true,
        date: "2025-03-31",
        link: "https://app.mmt.finance/trade"
      }
    }
  },
  "Bit77Hub": {
    name: "Bit77Hub",
    type: "Crypto Exchange",
    status: true,
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
    status: true,
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
  }
};

export default airdropData;