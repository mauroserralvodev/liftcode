import { UserDetailContext } from "@/context/UserDetailContext";
import { api } from "@/convex/_generated/api";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useMutation } from "convex/react";
import { useContext } from "react";

// Objetos de configuración centralizados
const CREDITS_BY_PLAN = {
  Basic: 100000,
  Pro: 250000,
  Advanced: 1000000
};

const PRICES_BY_PLAN = {
  Basic: "4.98",
  Pro: "9.90",
  Advanced: "24.90"
};

export default function PricingModel() {
  return (
    <div className="text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-w-7xl mx-auto">
          <PricingCard
            title="Basic"
            description="Perfect for getting started"
            credits="100K"
            price="$4.98"
            priceValue={PRICES_BY_PLAN.Basic}
            creditsValue={CREDITS_BY_PLAN.Basic}
            features={["Code generation", "Email support", "Access to general models"]}
          />

          <PricingCard
            title="Pro"
            description="Best value for growing teams"
            credits="250K"
            price="$9.90"
            priceValue={PRICES_BY_PLAN.Pro}
            creditsValue={CREDITS_BY_PLAN.Pro}
            discount="20%"
            popular={true}
            features={["All Basic features", "Priority support", "Priority code generation queues", "Custom AI models (beta)"]}
          />

          <PricingCard
            title="Advanced"
            description="For power users and large teams"
            credits="1M"
            price="$24.90"
            priceValue={PRICES_BY_PLAN.Advanced}
            creditsValue={CREDITS_BY_PLAN.Advanced}
            discount="50%"
            features={[
              "Everything in the Pro + Plan",
              "24/7 dedicated support",
              "Custom integrations",
              "Advanced security",
              "Dedicated account manager",
            ]}
          />
        </div>

        <div className="text-center mt-16 py-10 px-4 rounded-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Contact our sales team for a tailored credit package that meets your specific requirements.
          </p>
          <a href="https://brinpage.com/contact" className="px-6 py-3 border border-[#0071E3] text-[#0071E3] rounded-md hover:bg-[#0071E3] hover:text-white transition">
            Contact Sales
          </a>
        </div>
      </div>
    </div>
  );
}

function PricingCard({
  title,
  description,
  credits,
  price,
  priceValue,
  creditsValue,
  discount,
  features,
  popular
}) {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const UpdateToken = useMutation(api.users.UpdateToken);

  const onPaymentSuccess = async () => {
    if (!userDetail) return;
    
    try {
      const newTokens = userDetail.token + creditsValue;
      
      await UpdateToken({
        userId: userDetail._id,
        token: newTokens
      });

      setUserDetail(prev => ({
        ...prev,
        token: newTokens
      }));
      
      console.log("Créditos actualizados exitosamente!");
      
    } catch (error) {
      console.error("Error actualizando créditos:", error);
    }
  };

  return (
    <div className={`relative flex flex-col border p-8 border-white/20 rounded-3xl bg-neutral-900/20 backdrop-blur-lg overflow-hidden group transition-all duration-300 hover:border-white/50 ${
      popular ? "transform hover:scale-105" : ""
    }`}>
      
      {popular && (
        <div className="absolute top-0 right-0 bg-white/20 text-white px-3 py-1 text-sm rounded-bl-lg font-medium">
          Most Popular
        </div>
      )}

      <div className="p-6 border-b border-neutral-800">
        <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
        <p className="text-neutral-400">{description}</p>
      </div>

      <div className="flex-1 p-6">
        <div className="flex flex-col mb-6">
          <div className="flex items-baseline">
            <span className="text-5xl font-bold text-white">{credits}</span>
            <span className="text-lg ml-2 text-gray-400">credits</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-[#0071E3]">{price}</span>
            <span className="text-gray-500 ml-2 text-sm">/month</span>
            {discount && (
              <span className="ml-2 bg-[#0071E3]/20 text-[#0071E3] px-2 py-0.5 rounded-full text-xs font-medium">
                Save {discount}
              </span>
            )}
          </div>
        </div>

        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckIcon className="mr-2 h-5 w-5 text-[#0071E3]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 bg-white rounded-2xl">
        <PayPalButtons 
          style={{ layout: "vertical", shape: "pill", label: "paypal", tagline: "false" }} 
          locale="es_ES" 
          className="paypal-buttons-custom"
          disabled={!userDetail}
          onApprove={onPaymentSuccess}
          onCancel={() => console.log("Pago cancelado")}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: priceValue,
                  currency_code: 'USD'
                }
              }]
            });
          }}
        />
      </div>
    </div>
  );
}

function CheckIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}