import { Sun, Shield } from "lucide-react";
import { useTier } from "../context/TierContext";

export default function Profile({ onNavigate }) {
  const { isPremium, toggleTier } = useTier();

  return (
    <div className="h-full flex flex-col">
      <div className="px-5 pt-10 pb-4 flex-1 overflow-y-auto scrollbar-hide">
        <div className="mb-5">
          <p className="text-[12px] text-muted-text tracking-wide">Settings</p>
          <h2
            className="font-serif font-medium text-ink"
            style={{ fontSize: "28px" }}
          >
            Profile
          </h2>
        </div>

        <div
          className="rounded-[28px] p-5 mb-5"
          style={{
            background: "rgba(255,255,255,0.78)",
            border: "1px solid rgba(31,33,48,0.08)",
            boxShadow: "0 12px 30px rgba(99, 82, 60, 0.09)",
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-white font-extrabold text-xl"
              style={{
                background: "linear-gradient(135deg, #16A7A0, #8EDBD0)",
                boxShadow: "0 12px 28px rgba(22,167,160,0.22)",
              }}
            >
              G
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium text-ink">Gy</h3>
              <p className="text-[13px] text-muted-text">
                Aquarius Sun · Life Path 7 · Deep tone
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span
              className="px-3 py-1.5 rounded-full text-[12px] font-bold"
              style={{ background: "#F8DCCB", color: "#6C5F99" }}
            >
              Love focus
            </span>
            <span
              className="px-3 py-1.5 rounded-full text-[12px] font-bold"
              style={{ background: "#DDEDDC", color: "#6C5F99" }}
            >
              Bandung
            </span>
            <span
              className="px-3 py-1.5 rounded-full text-[12px] font-bold"
              style={{
                background: isPremium ? 'rgba(22,167,160,0.15)' : 'rgba(139,114,207,0.12)',
                color: isPremium ? '#16A7A0' : '#7A63BD'
              }}
            >
              {isPremium ? '✦ Premium' : 'Free'}
            </span>
          </div>
        </div>

        <div
          className="rounded-[24px] p-4 mb-4"
          style={{
            background: isPremium
              ? 'linear-gradient(135deg, rgba(22,167,160,0.1), rgba(139,114,207,0.1))'
              : 'rgba(255,255,255,0.78)',
            border: isPremium
              ? '1px solid rgba(22,167,160,0.2)'
              : '1px solid rgba(31,33,48,0.08)',
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[14px] font-medium text-ink">
                {isPremium ? '✦ Premium Unlocked' : 'Preview Mode'}
              </p>
              <p className="text-[12px] text-muted-text">
                {isPremium
                  ? 'All features unlocked. See the full experience.'
                  : 'Viewing as a free user. Switch to see premium.'}
              </p>
            </div>
            <button
              onClick={toggleTier}
              className="px-3 py-2 rounded-full text-[12px] font-bold"
              style={{
                background: isPremium
                  ? 'rgba(22,167,160,0.15)'
                  : 'linear-gradient(135deg, #8B72CF, #16A7A0)',
                color: isPremium ? '#16A7A0' : 'white',
              }}
            >
              {isPremium ? 'Switch to Free' : 'Unlock All'}
            </button>
          </div>
        </div>

        <p className="text-[11px] text-muted-text tracking-wide uppercase mb-3">
          Preferences
        </p>

        <div
          className="rounded-[22px] border px-4 mb-5"
          style={{
            background: "rgba(255,255,255,0.74)",
            border: "1px solid rgba(31,33,48,0.08)",
            boxShadow: "0 8px 18px rgba(99,82,60,0.05)",
          }}
        >
          <div className="flex items-center justify-between py-4 border-b border-[rgba(31,33,48,0.07)]">
            <div>
              <p className="text-[14px] font-medium text-ink">Daily Signal</p>
              <p className="text-[12px] text-muted-text">
                Personal insight every day
              </p>
            </div>
            <div
              className="w-[44px] h-[26px] rounded-full p-[3px]"
              style={{ background: "rgba(22,167,160,0.22)" }}
            >
              <div
                className="w-[20px] h-[20px] rounded-full"
                style={{ background: "#16A7A0", marginLeft: "18px" }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between py-4 border-b border-[rgba(31,33,48,0.07)]">
            <div>
              <p className="text-[14px] font-medium text-ink">Deep Tone</p>
              <p className="text-[12px] text-muted-text">
                Warm, direct, reflective
              </p>
            </div>
            <span className="text-[12px] text-muted-text">Active</span>
          </div>

          <a
            onClick={() => onNavigate("pricing")}
            className="flex items-center justify-between py-4"
            style={{cursor: 'pointer'}}
          >
            <div>
              <p className="text-[14px] font-medium text-ink">Subscription</p>
              <p className="text-[12px] text-muted-text">Manage your plan</p>
            </div>
            <span className="text-muted-text">→</span>
          </a>

          <div className="flex items-center justify-between py-4">
            <div>
              <p className="text-[14px] font-medium text-ink">Privacy</p>
              <p className="text-[12px] text-muted-text">
                Export or delete data
              </p>
            </div>
            <span className="text-muted-text">→</span>
          </div>
        </div>

        <div
          className="rounded-[24px] border p-4 mb-4"
          style={{
            background: "rgba(221,237,220,0.3)",
            border: "1px solid rgba(31,33,48,0.08)",
          }}
        >
          <div className="flex items-center gap-3">
            <Shield size={18} className="text-ink opacity-60" />
            <div>
              <p className="text-[14px] font-medium text-ink">Privacy First</p>
              <p className="text-[12px] text-muted-text">
                Your data is never sold. Ever.
              </p>
            </div>
          </div>
        </div>

        <button className="w-full py-3 text-[14px] font-medium text-[#F4C7D2] text-center">
          Delete Account
        </button>
      </div>
    </div>
  );
}