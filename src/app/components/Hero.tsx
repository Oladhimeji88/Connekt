import React from "react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import imgEllipse2 from "../../assets/390c7306f2c93935729cecc6ffdd75f4cd164298.png";
import imgEllipse1 from "../../assets/c243849c271a30f13bcc8fb2aa85a7003566f6ad.png";
import imgEllipse3 from "../../assets/584c8acc10113a33d0172bf0b2ff0f78d06064eb.png";
import imgEllipse7 from "../../assets/8d77d6c350f61f0e7dc54d409639faa1dc364cd7.png";
import imgEllipse5 from "../../assets/eef663647d360bea89a9d3bd53968efd3ff16f42.png";

export function Hero() {
  const [inputValue, setInputValue] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue) {
      toast.error("Please enter your account name or email");
      return;
    }
    toast.success("Account details retrieved successfully!");
    // Navigate to details page after a short delay to show the success toast
    setTimeout(() => {
      navigate("/account-details");
    }, 1000);
  };

  const avatars = [imgEllipse2, imgEllipse1, imgEllipse3, imgEllipse7, imgEllipse5];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32 pb-16 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#efab18] opacity-10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-[#efab18] opacity-10 blur-[100px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-5xl"
      >
        {/* Avatars */}
        <div className="flex -space-x-3 items-center">
          {avatars.map((avatar, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0, x: -20 }}
              animate={{ scale: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.1, type: "spring", stiffness: 200 }}
              className="size-10 md:size-12 rounded-full border-2 border-[#efab18] overflow-hidden shadow-xl"
            >
              <img src={avatar} alt={`User ${idx + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="ml-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10px] md:text-xs font-medium"
          >
            10k+ Happy Users
          </motion.div>
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] font-['Outfit'] tracking-tight">
            <div className="flex flex-col items-center justify-center">
              <span className="text-white font-normal text-[40px] md:text-[70px]">Renew Your</span>
              <span className="bg-gradient-to-r from-[#ffba26] via-[#fffdfa] to-[#ffba26] bg-clip-text text-transparent animate-gradient-x font-normal text-[45px] md:text-[80px]">Internet Subscription</span>
            </div>
          </h1>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6 bg-white/5 backdrop-blur-md p-2 sm:p-3 rounded-[32px] border border-white/10 shadow-2xl">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Account name or email"
                className="flex-grow bg-white/10 text-white rounded-2xl px-6 py-4 outline-none border border-white/10 font-['Outfit'] transition-all focus:bg-white focus:text-[#2e2e2e] focus:ring-4 focus:ring-[#efab18]/20 placeholder:text-white/40"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="whitespace-nowrap bg-[#efab18] text-black rounded-2xl px-8 py-4 font-bold font-['Outfit'] shadow-[0_10px_30px_rgba(239,171,24,0.3)] hover:bg-[#ffba26] transition-colors"
              >
                View Details
              </motion.button>
            </div>
          </form>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 flex items-center justify-center gap-4 text-xs text-white/40"
          >
            <span className="flex items-center gap-1">✓ Instant Activation</span>
            <span className="flex items-center gap-1">✓ 24/7 Support</span>
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-[#979797] text-sm md:text-lg max-w-2xl font-['Outfit'] leading-relaxed mx-auto px-4">
          Stay connected with our premium internet services. Experience ultra-fast speeds and zero downtime. Renew your subscription today for uninterrupted access.
        </p>
      </motion.div>
    </section>
  );
}
