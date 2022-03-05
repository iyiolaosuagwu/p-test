import { ReactComponent as DashboardIcon } from "assets/img/sidebar/patricia_category.svg";
import { ReactComponent as ActivityIcon } from "assets/img/sidebar/patricia_activity.svg";
import { ReactComponent as WalletIcon } from "assets/img/sidebar/patricia_wallet.svg";
import { ReactComponent as ProductsIcon } from "assets/img/sidebar/patricia_products.svg";
import { ReactComponent as ReferralsIcon } from "assets/img/sidebar/patricia_referral.svg";

let links = [
  {
    text: "Dashboard",
    to: "#",
    icon: DashboardIcon,
    active: false,
  },
  {
    text: "Activity",
    to: "#",
    icon: ActivityIcon,
    active: false,
  },
  {
    text: "Wallet",
    to: "#",
    icon: WalletIcon,
    active: true,
  },
  {
    text: "Products",
    to: "#",
    icon: ProductsIcon,
    active: false,
  },
  {
    text: "Referrals",
    to: "#",
    icon: ReferralsIcon,
    active: false,
  },
];

export default links;
