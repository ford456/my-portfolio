"use client";

export default function CookieOption({
  title,
  description,
  checked = false,
  onChange,
  alwaysOn = false,
}) {
  return (
    <div className="border border-white/20 rounded-xl p-4">
      <div className="flex items-center justify-between gap-5">

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-medium text-white">
            {title}
          </h3>

          {description && (
            <p className="text-sm text-white/60 mt-1 leading-5">
              {description}
            </p>
          )}
        </div>

        {/* Necessary */}
        {alwaysOn ? (
          <span className="shrink-0 text-xs text-white/50">
            เปิดเสมอ
          </span>
        ) : (
          /* Switch */
          <button
            type="button"
            role="switch"
            aria-checked={checked}
            aria-label={`${title} ${checked ? "เปิด" : "ปิด"}`}
            onClick={onChange}
            className={`
              relative shrink-0
              w-12 h-7
              rounded-full
              transition-colors duration-300
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-white/60
              ${
                checked
                  ? "bg-white"
                  : "bg-white/20"
              }
            `}
          >
            <span
              className={`
                absolute top-1
                w-5 h-5
                rounded-full
                transition-all duration-300
                ${
                  checked
                    ? "left-6 bg-black"
                    : "left-1 bg-white"
                }
              `}
            />
          </button>
        )}

      </div>
    </div>
  );
}