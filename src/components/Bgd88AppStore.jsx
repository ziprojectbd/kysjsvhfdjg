import { Button } from './Button';

const stars = (count) => '★'.repeat(count) + '☆'.repeat(5 - count);

const reviews = [
  {
    author: 'Miguel',
    date: '2/7/2025',
    rating: 4,
    text: 'বিশাল বোনাসসহ মজার খেলা',
  },
  {
    author: 'Greg Blake',
    date: '1/5/2025',
    rating: 5,
    text: 'খুব মজার ক্যাজুয়াল খেলা, আপনি অর্থও উপার্জন করতে পারেন',
  },
];

const footerLinks = [
  'ফেরত নীতি',
  'শিশু এবং পরিবার',
  'পরিবার নির্দেশিকা',
  'পারিবারিক শেয়ারিং',
  'পরিষেবার শর্তাবলী',
  'গোপনীয়তা',
  'সম্পর্কে',
];

const quickLinks = ['প্লে পাস', 'প্লে পয়েন্ট', 'উপহার ভাউচার', 'উদ্ধার'];

export default function Bgd88AppStore() {
  return (
    <section
      id="bgd88-app-store"
      className="section-padding bg-transparent relative z-20"
      aria-labelledby="bgd88-heading"
    >
      <div className="section-container relative">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-3xl pointer-events-none" />
        <div className="relative z-10">
        <div className="relative overflow-hidden mb-10 sm:mb-14 lg:mb-18">
          <div
            className="absolute inset-0 h-[200px] bg-gradient-to-r from-casino-neon via-casino-gold to-casino-neonViolet opacity-20 rounded-full blur-[120px] animate-rainbow pointer-events-none"
          />
          <div
            className="absolute inset-0 h-[200px] bg-gradient-to-r from-casino-neonViolet via-casino-gold to-casino-neon opacity-20 rounded-full blur-[120px] animate-rainbow pointer-events-none"
            style={{ animationDelay: '2s' }}
          />
          <div className="relative z-10 flex items-center gap-2 overflow-hidden whitespace-nowrap border-b border-casino-border/40 pb-3 sm:pb-4 animate-[marquee_20s_linear_infinite]">
            <span className="text-white font-bold tracking-widest uppercase animate-pulse">🎰 JOIN REWARDS</span>
            <span className="text-white font-bold tracking-widest">✨ 4.90 ★ 🎲</span>
            <span className="text-white font-bold tracking-widest animate-pulse" style={{ animationDelay: '0.5s' }}>💎 বাংলাদেশের প্রিয় গেমিং অ্যাপ</span>
            <span className="text-white font-bold tracking-widest uppercase animate-pulse" style={{ animationDelay: '1s' }}>🎰 JOIN REWARDS</span>
            <span className="text-white font-bold tracking-widest">✨ 4.90 ★ 🎲</span>
            <span className="text-white font-bold tracking-widest animate-pulse" style={{ animationDelay: '0.5s' }}>💎 বাংলাদেশের প্রিয় গেমিং অ্যাপ</span>
          </div>
        </div>
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center sm:justify-between gap-3 sm:gap-6 mb-8">
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dxilo3mlg/image/upload/v1793734170/Glossy_Claim_Reward_Badge_apoiw7.png"
                alt="Claim Reward Badge"
                className="h-10 sm:h-12 w-auto shrink-0"
              />
              <div className="flex flex-col items-start justify-center gap-1">
                <h2 id="bgd88-heading" className="text-xl sm:text-3xl font-sanchez text-white tracking-tighter gradient-text drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] leading-tight">
                  JOIN REWARDS
                </h2>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-500 border border-green-400 text-white text-[10px] font-bold uppercase shadow-[0_0_10px_rgba(34,197,94,0.4)] animate-pulse">
                  <span aria-hidden="true">✓</span>
                  verified
                </span>
              </div>
            </div>
            <div className="text-right sm:text-left">
              <div className="text-sm sm:text-base font-semibold text-white">100k users</div>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start mb-12 sm:mb-16 lg:mb-20">
            <Button variant="primary" size="lg" external className="flex-1 sm:flex-auto w-full sm:w-auto text-white">
              Sign Up
            </Button>
          </div>
        </div>

        <div className="mb-12 sm:mb-16 lg:mb-20 overflow-hidden relative">
          <div
            className="flex gap-4 flex-nowrap animate-marquee-slow min-w-max"
          >
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-[260px] sm:w-[300px] lg:w-[340px] aspect-[9/16] rounded-2xl overflow-hidden border border-casino-border/50 shrink-0 flex-shrink-0"
              >
                <img
                  src="https://res.cloudinary.com/dxilo3mlg/image/upload/v1780471612/skbet999/banner-1780471648915-rhpr9o.png"
                  alt={`Banner ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i + 10}
                className="w-[260px] sm:w-[300px] lg:w-[340px] aspect-[9/16] rounded-2xl overflow-hidden border border-casino-border/50 shrink-0 flex-shrink-0"
              >
                <img
                  src="https://res.cloudinary.com/dxilo3mlg/image/upload/v1780471612/skbet999/banner-1780471648915-rhpr9o.png"
                  alt={`Banner ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-xl sm:text-2xl font-orbitron text-white mb-6 gradient-text">এই অ্যাপ সম্পর্কে</h3>
          <p className="text-white leading-relaxed max-w-3xl">
            সত্যিকারের আনন্দ *২০২৫ সালের সবচেয়ে জনপ্রিয় গেম* রিলের রিংটোন, স্ক্রিনের আলো, এবং জয়ের উত্তেজনা! এটি আপনার বাড়িতে গেমিং অভিজ্ঞতার দৃশ্য ও শব্দ নিয়ে আসে, যা আপনার জয়ের পরিমাণকে নতুন উচ্চতায় নিয়ে যায়! যত বেশি স্পিন করবেন, তত বেশি জিতবেন! চূড়ান্ত জয় নিশ্চিত নয়।
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs text-white/80">
            <span className="w-1.5 h-1.5 rounded-full bg-casino-neon" />
            <span>আপডেট হয়েছে</span>
            <span className="font-medium text-white">January 5, 2026</span>
          </div>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16 lg:mb-20">
          <h3 className="text-xl sm:text-2xl font-orbitron text-white mb-6 gradient-text">ডাটা সুরক্ষা</h3>
          <p className="text-white leading-relaxed mb-6">
            আপনার নিরাপত্তা শুরু হয় এই বোঝার মাধ্যমে যে ডেভেলপাররা কীভাবে আপনার ডাটা সংগ্রহ ও শেয়ার করেন। ডাটা সুরক্ষা ও গোপনীয়তা নীতি ব্যবহারের ধরন, অঞ্চল এবং বয়স অনুযায়ী পরিবর্তিত হতে পারে। ডেভেলপার নিম্নলিখিত তথ্য সরবরাহ করেছেন, যা সময়ের সাথে আপডেট হতে পারে।
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-white font-bold shrink-0">শেয়ার</span>
              <p className="text-white">এই অ্যাপ তৃতীয় পক্ষের সাথে নিম্নলিখিত ধরণের ডাটা শেয়ার করতে পারে</p>
            </div>
            <div className="ml-8 bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-sm text-white">অবস্থান, আর্থিক তথ্য এবং ডিভাইস শনাক্তকারী ও অন্যান্য</p>
            </div>

            <div className="flex items-start gap-3 mt-4">
              <span className="text-white font-bold shrink-0">সংগ্রহ</span>
              <p className="text-white">এই অ্যাপ নিম্নলিখিত ডাটা সংগ্রহ করতে পারে: অবস্থান, ব্যক্তিগত তথ্য এবং আরও ৫টি</p>
            </div>

            <div className="flex items-start gap-3 mt-4">
              <span className="text-white font-bold shrink-0">এনক্রিপশন</span>
              <p className="text-white">ডাটা এনক্রিপ্ট করা নেই</p>
            </div>

            <div className="flex items-start gap-3 mt-4">
              <span className="text-white font-bold shrink-0">মুছে ফেলা</span>
              <p className="text-white">আপনি ডাটা মুছে ফেলার অনুরোধ করতে পারেন</p>
            </div>
          </div>
        </div>

        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-orbitron text-white mb-6 gradient-text">রেটিং এবং রিভিউ</h3>
            <p className="text-white/80 leading-relaxed mb-8 text-center sm:text-center lg:text-left max-w-lg mx-auto sm:mx-0 lg:mx-0">
              রিভিউ এবং রেটিং যাচাই করা হয়েছে এবং আপনার মতো একই ধরনের ডিভাইস ব্যবহারকারীদের কাছ থেকে এসেছে
            </p>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">4.90</div>
                <div className="text-xs sm:text-sm text-white/80">স্টার রেটিং</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100,000</div>
                <div className="text-xs sm:text-sm text-white/80">রিভিউ</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center gap-2">
                {[5, 4, 3, 2, 1].map((n) => (
                  <div
                    key={n}
                    className="flex items-center gap-2 text-sm sm:text-base w-full justify-center"
                  >
                    <span className={n <= 4 ? 'text-white/80 font-bold' : 'text-white font-bold'}>
                      {n}
                    </span>
                    <span className="text-white/80">★</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-casino-neon" />
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-bold text-white shrink-0">
                      {review.author.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm font-semibold text-white">{review.author}</span>
                        <span className="text-[10px] text-white/70">{review.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-casino-neon mt-0.5">
                        {stars(review.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-[12px] sm:text-sm text-white/90 leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-white/80 mb-12 sm:mb-16 lg:mb-20">
          <span>টেলিফোন</span>
          <span>ট্যাবলেট</span>
          <span>ক্রোমবুক</span>
        </div>

        <div className="border-t border-casino-border/40 pt-8 sm:pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
            {quickLinks.map((link) => (
              <div key={link}>
                <p className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                  {link}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6 text-xs text-white/80">
            {footerLinks.map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
