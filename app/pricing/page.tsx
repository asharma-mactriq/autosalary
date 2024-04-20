import { title } from "@/components/primitives";

export default function PricingPage() {
  return (
    <div className="flex-col space-y-4">
      <h1 className={title()}>Pricing</h1>

      <h1 className=" text-base">Installation : 22,500</h1>
      <h1 className=" text-base">Per Month : 6500 x 12</h1>
      <h1 className=" text-base">Total : 1,00,500</h1>
    </div>
  );
}
