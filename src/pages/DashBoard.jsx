import React from "react";
import Container from "../components/Container";
import ModuleBtn from "../components/ModuleBtn";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { HiMiniDocumentDuplicate } from "react-icons/hi2";
import { IoMdTrophy } from "react-icons/io";
import { TbAlertSquareFilled } from "react-icons/tb";
import Aurora from "../components/Aurora";
import MagicBento from "../components/MagicBento";
import Nav from "../components/Nav";
import LogOut from "../components/LogOut";

const DashBoard = () => {
  return (
    <section className="relative min-h-screen">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-5">
          <div className="col-span-1">
            <ModuleBtn
              name={"Products"}
              icon={<HiSquare3Stack3D className="size-14" />}
              url={"/dashboard/product"}
            />
          </div>

          <div className="col-span-1">
            <ModuleBtn
              name={"Sale"}
              icon={<HiMiniShoppingBag className="size-14" />}
              url={"/dashboard/sale"}
            />
          </div>

          <div className="col-span-1">
            <ModuleBtn
              name={"Voucher"}
              icon={<HiMiniDocumentDuplicate className="size-14" />}
              url={"/dashboard/voucher"}
            />
          </div>

          <div className="col-span-1">
            <ModuleBtn
              name={"Best Selling Products"}
              icon={<IoMdTrophy className="size-14" />}
              url={"/dashboard/best-selling-products"}
            />
          </div>

          <div className="col-span-1">
            <ModuleBtn
              name={"Low Stocks Alerts"}
              icon={<TbAlertSquareFilled className="size-14" />}
              url={"/dashboard/low-stocks-alerts"}
            />
          </div>
        </div>

        <div className="flex gap-3 items-center justify-end">
          <p className="text-[#2B2B2B] font-sm">If you finish your work, you can </p>
        <LogOut/>
        </div>

        {/* <MagicBento
          textAutoHide={true}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect
          spotlightRadius={400}
          particleCount={12}
          glowColor="132, 0, 255"
          disableAnimations={false}
        /> */}
      </Container>
    </section>
  );
};

export default DashBoard;
