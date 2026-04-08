import { useState, useEffect, useRef } from "react";
const T = {
  ne: {
    siteTitle: "बोध नारायण श्रेष्ठ | राजनीतिक नेता र सार्वजनिक सेवक",
    nav: ["परिचय", "नीति", "यात्रा", "सम्पर्क"],
    navIds: ["about", "policies", "journey", "contact"],
    heroLabel: "आधिकारिक पोर्टफोलियो — निर्वाचन क्षेत्र नं. ४२",
    heroLine1: "बोध",
    heroLine2: "नारायण श्रेष्ठ",
    heroItalic: "जनताका लागि",
    heroTitle: "विधायक · वरिष्ठ नेता · सार्वजनिक सेवक",
    heroQuote: "\"सेवा कुनै ओहदा होइन — यो आफ्नो सरोकारमा रहेका हरेक व्यक्तिप्रतिको वाचा हो।\"",
    ctaPrimary: "सम्पर्क गर्नुहोस्",
    ctaSecondary: "थप जान्नुहोस् →",
    stats: [
      { label: "सेवाका वर्षहरू", value: "१८" },
      { label: "पारित विधेयक", value: "४३" },
      { label: "मतदाताहरू", value: "२४ लाख" },
      { label: "सम्पन्न परियोजना", value: "१२७" },
    ],
    secNums: ["०१", "०२", "०३", "०४"],
    secTitles: ["जीवनी", "नीतिका स्तम्भहरू", "यात्रा", "सम्पर्क"],
    aboutP1: "बोध नारायण श्रेष्ठyले आफ्नो जीवनका लगभग दुई दशक सार्वजनिक सेवामा समर्पित गर्नुभएको छ। ग्रामीण भारतको साधारण परिवारबाट उठेर उहाँ विधायी शासनमा सबैभन्दा सम्मानित आवाजहरूमध्ये एक बन्नुभएको छ। किसान परिवारमा जन्मिएका उहाँले सानैदेखि असमानताको भार र स्रोत, शिक्षा तथा अवसरमा पहुँचको परिवर्तनकारी शक्ति बुझ्नुभएको थियो।",
    aboutP2: "२००६ मा पहिलो पटक विधायक निर्वाचित भएपछि, उहाँले ग्रामीण पूर्वाधार, कृषि सुधार र सार्वभौमिक शिक्षाका कारणहरूका लागि अभियान चलाउनुभएको छ। उहाँको कार्यकाल वाक्पटुताले नभई मापनयोग्य उपलब्धिहरूले चिनिन्छ — निर्मित सडकहरू, स्थापित विद्यालयहरू र परिवर्तित जीवनहरू।",
    aboutP3: "बोध नारायण श्रेष्ठ आफ्नो सुलभताका लागि परिचित हुनुहुन्छ। उहाँले साप्ताहिक सार्वजनिक सुनुवाइ सञ्चालन गर्नुहुन्छ जहाँ जुनसुकै मतदाताले आफ्नो चिन्ता सीधा आफ्नो प्रतिनिधिसमक्ष राख्न सक्छन्।",
    sidebarLabels: ["जन्म", "निर्वाचन क्षेत्र", "दलीय सम्बद्धता", "शिक्षा", "हालको भूमिका"],
    sidebarValues: ["मार्च १४, १९६८ — जोधपुर", "विजयनगर, वडा ४२", "राष्ट्रिय जनमोर्चा", "एल.एल.बी · राजस्थान विश्वविद्यालय", "विधायक · राज्य वित्त समिति"],
    policies: [
      { icon: "◈", title: "ग्रामीण पूर्वाधार", desc: "क्षेत्रका वञ्चित समुदायहरूमा सडक, विद्यालय र अस्पताल निर्माण।" },
      { icon: "◉", title: "आर्थिक सुधार", desc: "साना व्यवसायहरू उत्थान गर्ने र अर्थपूर्ण रोजगार सिर्जना गर्ने दिगो नीतिहरू।" },
      { icon: "◎", title: "शिक्षामा पहुँच", desc: "प्राथमिकदेखि उच्च शिक्षासम्म गुणस्तरीय शिक्षामा सार्वभौमिक पहुँच।" },
      { icon: "◇", title: "वातावरण नीति", desc: "औद्योगिक विकास र पारिस्थितिकीय संरक्षणको सन्तुलन मिलाउने हरित पहलहरू।" },
    ],
    timeline: [
      { year: "२००६", event: "पहिलो निर्वाचन विजय", desc: "विजयनगर निर्वाचन क्षेत्रमा ऐतिहासिक १८,००० मतको अन्तरले जित।" },
      { year: "२०१०", event: "ग्रामीण सडक पहल", desc: "४७ गाउँहरूलाई मूल राजमार्गसँग जोड्ने ३०० किमी ग्रामीण सडक परियोजना।" },
      { year: "२०१४", event: "बढ्दो बहुमतसहित पुनर्निर्वाचन", desc: "निर्वाचन क्षेत्रको इतिहासकै सबैभन्दा ठूलो जनादेशसहित कार्यालयमा फर्किनुभयो।" },
      { year: "२०१८", event: "राज्य वित्त समिति अध्यक्ष", desc: "₹४,२०० करोड बजेट हेर्ने राज्य वित्त समितिको नेतृत्वका लागि नियुक्ति।" },
      { year: "२०२२", event: "लगातार तेस्रो कार्यकाल", desc: "लगातार तेस्रो पटक निर्वाचित — निरन्तर सार्वजनिक सेवाको प्रमाण।" },
    ],
    contactHeading: "चिन्ता, प्रस्ताव वा प्रश्न छ? हरेक सन्देश व्यक्तिगत रूपमा पढिन्छ।",
    contactItems: [
      { l: "कार्यालय", v: "४२, विधायिका रोड, विजयनगर — ३४२००१" },
      { l: "फोन", v: "+९१ ९४१०० ०००४२" },
      { l: "इमेल", v: "contact@bodhnarayan.in" },
      { l: "सार्वजनिक सुनुवाइ", v: "प्रत्येक शनिबार, बिहान १० – दिउँसो १" },
    ],
    formLabels: ["पूरा नाम", "इमेल ठेगाना", "विषय", "सन्देश"],
    formPlaceholders: ["तपाईंको नाम", "tapai@email.com", "संक्षिप्त विषय", "तपाईंको सन्देश..."],
    formBtn: "सन्देश पठाउनुहोस्",
    footerCopy: "© २०२५ बोध नारायण श्रेष्ठ। सर्वाधिकार सुरक्षित।",
    footerLinks: ["गोपनीयता", "प्रेस", "अस्वीकरण"],
    popupText: "रंगीन, अन्तरक्रियात्मक संस्करण उपलब्ध छ",
    popupYes: "लोड गर्नुहोस् →",
    popupNo: "सरल राख्नुहोस्",
    musicLabel: "🎵 चुनाव थीम — बोध नारायण श्रेष्ठ",
    colorfulBadge: "आधिकारिक पोर्टफोलियो — निर्वाचन क्षेत्र नं. ४२",
    cHeroRole: "विधायक · वरिष्ठ नेता",
    cContactHeading: "हरेक सन्देश व्यक्तिगत रूपमा पढिन्छ। आफ्नो चिन्ता पठाउनुहोस्।",
    cCtaPrimary: "सम्पर्क गर्नुहोस्",
    cCtaSecondary: "थप जान्नुहोस्",
    colorfulPolicies: [
      { icon: '🌾', title: 'कृषि सुधार', desc: 'प्रविधि, उचित मूल्य र पानी सुरक्षासहित कृषि आधुनिकीकरण।', color: '#22c55e' },
      { icon: '🏗️', title: 'पूर्वाधार', desc: 'विश्वस्तरीय सडक, पुल र सार्वजनिक यातायात नेटवर्कहरू।', color: '#3b82f6' },
      { icon: '📚', title: 'शिक्षा', desc: 'बालबालिकादेखि विश्वविद्यालयसम्म निःशुल्क गुणस्तरीय शिक्षा।', color: '#a855f7' },
      { icon: '⚡', title: 'स्वच्छ ऊर्जा', desc: '२०२७ सम्म हरेक घरपरिवारका लागि सौर्यऊर्जा प्रथम नीति।', color: '#f59e0b' },
      { icon: '🏥', title: 'स्वास्थ्यसेवा', desc: '२०० नयाँ प्राथमिक स्वास्थ्य केन्द्रसहित सार्वभौमिक स्वास्थ्यसेवा।', color: '#ef4444' },
      { icon: '💼', title: 'रोजगारी', desc: 'सीप भारत + लघु उद्यमहरूमार्फत ५०,००० स्थानीय रोजगारी।', color: '#06b6d4' },
    ],
  },
  en: {
    siteTitle: "Bodh Narayan Shrestha | Political Leader & Public Servant",
    nav: ["About", "Policies", "Journey", "Contact"],
    navIds: ["about", "policies", "journey", "contact"],
    heroLabel: "Official Portfolio — Constituency No. 42",
    heroLine1: "Bodh",
    heroLine2: "Narayan Shrestha",
    heroItalic: "For the People",
    heroTitle: "Member of Legislative Assembly · Senior Leader · Public Servant",
    heroQuote: "\"Service is not a position one holds — it is a promise one keeps to every soul in their care.\"",
    ctaPrimary: "Get in Touch",
    ctaSecondary: "Learn More →",
    stats: [
      { label: "Years in Service", value: "18" },
      { label: "Bills Passed", value: "43" },
      { label: "Constituents", value: "2.4M" },
      { label: "Projects Completed", value: "127" },
    ],
    secNums: ["01", "02", "03", "04"],
    secTitles: ["Biography", "Policy Pillars", "Journey", "Contact"],
    aboutP1: "Bodh Narayan Shrestha has devoted nearly two decades of his life to public service, emerging from humble beginnings in rural India to become one of the most respected voices in legislative governance. Born into a family of farmers, he understood from an early age the weight of inequality and the transformative power of access to resources, education, and opportunity.",
    aboutP2: "First elected to the Legislative Assembly in 2006, he has championed rural infrastructure, agricultural reform, and universal education. His tenure is marked not by rhetoric but by measurable outcomes — roads built, schools established, and lives changed.",
    aboutP3: "Beyond legislation, Bodh Narayan Shrestha is known for his accessibility, conducting weekly public hearings where any constituent may voice their concern directly to their representative.",
    sidebarLabels: ["Born", "Constituency", "Party Affiliation", "Education", "Current Role"],
    sidebarValues: ["March 14, 1968 — Jodhpur", "Vijaynagar, Ward 42", "National People's Front", "L.L.B · Rajasthan University", "MLA · State Finance Committee"],
    policies: [
      { icon: "◈", title: "Rural Infrastructure", desc: "Building roads, schools, and hospitals in underserved communities across the region." },
      { icon: "◉", title: "Economic Reform", desc: "Sustainable economic policies that uplift small businesses and create meaningful employment." },
      { icon: "◎", title: "Education Access", desc: "Universal access to quality education from primary through higher institutions." },
      { icon: "◇", title: "Environmental Policy", desc: "Green initiatives balancing industrial growth with ecological preservation." },
    ],
    timeline: [
      { year: "2006", event: "First Election Victory", desc: "Won the Vijaynagar constituency by a historic margin of 18,000 votes." },
      { year: "2010", event: "Rural Roads Initiative", desc: "Spearheaded a 300km rural road project connecting 47 villages to main highways." },
      { year: "2014", event: "Re-elected with Increased Majority", desc: "Returned to office with the largest mandate in constituency history." },
      { year: "2018", event: "State Finance Committee Chair", desc: "Appointed to lead the State Finance Committee, overseeing ₹4,200 crore budget." },
      { year: "2022", event: "Third Consecutive Term", desc: "Elected for a third consecutive term — a testament to consistent public service." },
    ],
    contactHeading: "Have a concern, proposal, or query? Every message is read personally.",
    contactItems: [
      { l: "Office", v: "42, Legislature Road, Vijaynagar — 342001" },
      { l: "Phone", v: "+91 94100 00042" },
      { l: "Email", v: "contact@bodhnarayan.in" },
      { l: "Public Hearing", v: "Every Saturday, 10 AM — 1 PM" },
    ],
    formLabels: ["Full Name", "Email Address", "Subject", "Message"],
    formPlaceholders: ["Your name", "your@email.com", "Brief subject", "Your message..."],
    formBtn: "Send Message",
    footerCopy: "© 2025 Bodh Narayan Shrestha. All Rights Reserved.",
    footerLinks: ["Privacy Policy", "Press", "Disclaimer"],
    popupText: "A colorful, interactive version is available",
    popupYes: "Load It →",
    popupNo: "Stay Minimal",
    musicLabel: "🎵 Campaign Theme — Bodh Narayan Shrestha",
    colorfulBadge: "Official Portfolio — Constituency No. 42",
    cHeroRole: "Member of Legislative Assembly · Senior Leader",
    cContactHeading: "Every message is read personally. Reach out with your concerns.",
    cCtaPrimary: "Get In Touch",
    cCtaSecondary: "Learn More",
    colorfulPolicies: [
      { icon: '🌾', title: 'Agricultural Reform', desc: 'Modernising farming with tech, fair pricing & water security.', color: '#22c55e' },
      { icon: '🏗️', title: 'Infrastructure', desc: 'World-class roads, bridges, and public transport networks.', color: '#3b82f6' },
      { icon: '📚', title: 'Education', desc: 'Free quality education from kindergarten to university.', color: '#a855f7' },
      { icon: '⚡', title: 'Clean Energy', desc: 'Solar-first energy policy for every household by 2027.', color: '#f59e0b' },
      { icon: '🏥', title: 'Healthcare', desc: 'Universal healthcare with 200 new primary care centres.', color: '#ef4444' },
      { icon: '💼', title: 'Employment', desc: 'Skill India + 50,000 local jobs through MSMEs.', color: '#06b6d4' },
    ],
  },
};

// ─── LANG TOGGLE ──────────────────────────────────────────────────────────────
function LangToggle({ lang, setLang, dark = false }) {
  return (
    <button
      onClick={() => setLang(lang === "ne" ? "en" : "ne")}
      aria-label="Toggle language"
      style={{
        display: "flex", alignItems: "center",
        background: "none", border: dark ? "1px solid rgba(167,139,250,0.25)" : "1px solid rgba(26,26,24,0.18)",
        borderRadius: 999, overflow: "hidden", cursor: "pointer", padding: 0,
        flexShrink: 0, transition: "border-color 0.3s",
      }}
    >
      {["ne","en"].map(l => (
        <span key={l} style={{
          padding: "0.3rem 0.75rem",
          fontSize: "0.62rem", fontFamily: "'Jost', sans-serif",
          letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: lang === l ? 600 : 300,
          color: lang === l ? "#fff" : (dark ? "rgba(226,232,240,0.35)" : "rgba(26,26,24,0.4)"),
          background: lang === l ? (dark ? "linear-gradient(135deg,#a78bfa,#60a5fa)" : "#1a1a18") : "transparent",
          transition: "all 0.25s ease", display: "block",
        }}>{l.toUpperCase()}</span>
      ))}
    </button>
  );
}

// ─── SEO META ─────────────────────────────────────────────────────────────────
function SEOMeta({ lang }) {
  useEffect(() => {
    document.title = T[lang].siteTitle;
    document.documentElement.lang = lang === "ne" ? "ne" : "en";
  }, [lang]);
  return null;
}

// ─── MUSIC PLAYER ─────────────────────────────────────────────────────────────
function MusicPlayer({ label }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [visible, setVisible] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 1200);
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.loop = true;
    const onTime = () => setProgress((audio.currentTime / audio.duration) * 100 || 0);
    audio.addEventListener('timeupdate', onTime);
    return () => audio.removeEventListener('timeupdate', onTime);
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (playing) audio.pause(); else audio.play().catch(()=>{});
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src="rsp.mp3" preload="metadata" />
      <div style={{
        position:'fixed', bottom: visible ? '0' : '-120px', left:0, right:0, zIndex:9999,
        background:'linear-gradient(135deg,#0f0c29,#302b63,#24243e)',
        borderTop:'1px solid rgba(255,255,255,0.08)',
        padding:'1rem 2rem', display:'flex', alignItems:'center', gap:'1.5rem',
        transition:'bottom 0.6s cubic-bezier(0.16,1,0.3,1)',
      }}>
        <button onClick={toggle} style={{
          width:44, height:44, borderRadius:'50%',
          background: playing ? 'rgba(255,255,255,0.15)' : 'linear-gradient(135deg,#a78bfa,#60a5fa)',
          border:'none', cursor:'pointer', color:'white', fontSize:'1.1rem',
          display:'flex', alignItems:'center', justifyContent:'center', transition:'all 0.3s', flexShrink:0,
        }}>{playing ? '⏸' : '▶'}</button>
        <div style={{flex:1, display:'flex', flexDirection:'column', gap:'0.4rem'}}>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <span style={{color:'rgba(255,255,255,0.85)', fontSize:'0.75rem', letterSpacing:'0.1em', fontFamily:'Jost,sans-serif'}}>{label}</span>
            <span style={{color:'rgba(255,255,255,0.4)', fontSize:'0.65rem'}}>LOOP</span>
          </div>
          <div onClick={e => {
            const r = e.currentTarget.getBoundingClientRect();
            audioRef.current.currentTime = ((e.clientX - r.left) / r.width) * audioRef.current.duration;
          }} style={{height:3, background:'rgba(255,255,255,0.1)', borderRadius:2, cursor:'pointer'}}>
            <div style={{width:`${progress}%`, height:'100%', background:'linear-gradient(90deg,#a78bfa,#60a5fa)', borderRadius:2, transition:'width 0.2s'}} />
          </div>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'0.5rem', flexShrink:0}}>
          <span style={{fontSize:'0.75rem'}}>🔊</span>
          <input type="range" min="0" max="1" step="0.01" value={volume}
            onChange={e => { setVolume(+e.target.value); audioRef.current.volume = +e.target.value; }}
            style={{width:60, accentColor:'#a78bfa', cursor:'pointer'}} />
        </div>
      </div>
    </>
  );
}

// ─── VERSION POPUP ────────────────────────────────────────────────────────────
function VersionPopup({ onYes, onNo, t }) {
  const [show, setShow] = useState(false);
  const [exit, setExit] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 1800); }, []);
  const dismiss = cb => { setExit(true); setTimeout(cb, 400); };
  if (!show) return null;
  return (
    <div style={{
      position:'fixed', bottom: exit ? '-140px' : '2rem', left:'50%',
      transform:'translateX(-50%)', zIndex:10000,
      transition:'bottom 0.5s cubic-bezier(0.16,1,0.3,1)',
      display:'flex', alignItems:'center', gap:'1.5rem',
      padding:'1.1rem 1.8rem',
      background:'rgba(8,6,20,0.96)', backdropFilter:'blur(20px)',
      border:'1px solid rgba(255,255,255,0.1)', borderRadius:12,
      boxShadow:'0 20px 60px rgba(0,0,0,0.6)',
    }}>
      <span style={{fontSize:'1rem'}}>✨</span>
      <span style={{fontFamily:"'Jost',sans-serif", fontSize:'0.78rem', letterSpacing:'0.04em', color:'rgba(226,232,240,0.85)', whiteSpace:'nowrap'}}>{t.popupText}</span>
      <button onClick={() => dismiss(onYes)} style={{
        padding:'0.45rem 1.2rem', background:'linear-gradient(135deg,#a78bfa,#60a5fa)',
        border:'none', borderRadius:6, cursor:'pointer',
        fontFamily:"'Jost',sans-serif", fontSize:'0.7rem', letterSpacing:'0.1em', color:'white', whiteSpace:'nowrap',
      }}>{t.popupYes}</button>
      <button onClick={() => dismiss(onNo)} style={{
        padding:'0.45rem 1.2rem', background:'transparent',
        border:'1px solid rgba(255,255,255,0.12)', borderRadius:6, cursor:'pointer',
        fontFamily:"'Jost',sans-serif", fontSize:'0.7rem', letterSpacing:'0.1em',
        color:'rgba(226,232,240,0.4)', whiteSpace:'nowrap',
      }}>{t.popupNo}</button>
    </div>
  );
}

// ─── MINIMAL SITE ─────────────────────────────────────────────────────────────
function MinimalSite({ lang, setLang }) {
  const [vis, setVis] = useState(false);
  const t = T[lang];
  const isNe = lang === "ne";
  useEffect(() => { setTimeout(() => setVis(true), 100); }, []);

  const neFont = isNe ? { fontFamily:"'Tiro Devanagari Hindi',serif", lineHeight:1.85 } : {};

  return (
    <div style={{ opacity: vis ? 1 : 0, transition: 'opacity 0.8s ease' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Jost:wght@200;300;400;500&family=Tiro+Devanagari+Hindi:ital@0;1&display=swap');
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
        :root{--ink:#1a1a18;--paper:#f5f3ef;--muted:#8a8778;--accent:#3d3d35;--line:#d8d4cc;--warm:#c8a96e;}
        html{scroll-behavior:smooth;}
        body{background:var(--paper);color:var(--ink);font-family:'Jost',sans-serif;font-weight:300;overflow-x:hidden;}
        .m-nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:1.4rem 4rem;background:rgba(245,243,239,0.93);backdrop-filter:blur(8px);border-bottom:1px solid rgba(216,212,204,0.4);}
        .m-logo{font-family:'Cormorant Garamond',serif;font-size:1.1rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--ink);text-decoration:none;}
        .m-nav-right{display:flex;align-items:center;gap:2.5rem;}
        .m-nav-links{display:flex;gap:2.5rem;list-style:none;}
        .m-nav-links a{font-size:0.72rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);text-decoration:none;transition:color 0.3s;}
        .m-nav-links a:hover{color:var(--ink);}
        .m-hero{min-height:100vh;display:grid;grid-template-columns:1fr 1fr;padding-top:5rem;}
        .m-hero-left{display:flex;flex-direction:column;justify-content:center;padding:6rem 4rem 6rem 6rem;animation:mSlideUp 1s ease 0.3s both;}
        .m-label{font-size:0.63rem;letter-spacing:0.3em;text-transform:uppercase;color:var(--warm);margin-bottom:1.5rem;}
        .m-name{font-family:'Cormorant Garamond',serif;font-size:clamp(3rem,6vw,5.5rem);font-weight:300;line-height:1.05;color:var(--ink);margin-bottom:1rem;}
        .m-name-italic{font-style:italic;color:var(--muted);display:block;font-size:0.65em;font-family:'Cormorant Garamond',serif;}
        .m-title{font-size:0.78rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--muted);margin-bottom:2.5rem;padding-bottom:2.5rem;border-bottom:1px solid var(--line);}
        .m-quote{font-family:'Cormorant Garamond',serif;font-size:1.2rem;font-weight:300;font-style:italic;color:var(--accent);line-height:1.7;max-width:380px;margin-bottom:3rem;}
        .m-cta{display:flex;gap:1.5rem;align-items:center;}
        .m-btn-p{display:inline-block;padding:0.85rem 2.3rem;background:var(--ink);color:var(--paper);font-family:'Jost',sans-serif;font-size:0.68rem;letter-spacing:0.2em;text-transform:uppercase;text-decoration:none;transition:all 0.3s;border:none;cursor:pointer;}
        .m-btn-p:hover{background:var(--accent);transform:translateY(-2px);}
        .m-btn-g{font-size:0.68rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);text-decoration:none;border-bottom:1px solid var(--line);padding-bottom:2px;transition:all 0.3s;background:none;border-top:none;border-left:none;border-right:none;cursor:pointer;}
        .m-btn-g:hover{color:var(--ink);border-color:var(--ink);}
        .m-hero-right{position:relative;overflow:hidden;animation:mFadeIn 1.2s ease 0.5s both;}
        .m-img-wrap{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:4rem 4rem 4rem 2rem;}
        .m-img-frame{position:relative;width:100%;max-width:420px;aspect-ratio:3/4;}
        .m-img-frame::before{content:'';position:absolute;inset:-12px -12px 12px 12px;border:1px solid var(--line);z-index:0;}
        .m-img-ph{width:100%;height:100%;background:linear-gradient(160deg,#e8e4dc 0%,#d0ccc4 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;z-index:1;gap:1rem;}
        .m-yr{position:absolute;bottom:-1.5rem;right:-1.5rem;background:var(--ink);color:var(--paper);font-family:'Cormorant Garamond',serif;font-size:3rem;font-weight:300;padding:1rem 1.5rem;z-index:2;}
        .m-stats{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line);}
        .m-stat{padding:3rem 2rem;border-right:1px solid var(--line);text-align:center;transition:background 0.3s;}
        .m-stat:last-child{border-right:none;}
        .m-stat:hover{background:rgba(200,169,110,0.05);}
        .m-stat-val{font-family:'Cormorant Garamond',serif;font-size:3.5rem;font-weight:300;color:var(--ink);line-height:1;margin-bottom:0.5rem;}
        .m-stat-lbl{font-size:0.62rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--muted);}
        .m-sec{padding:7rem 6rem;}
        .m-sec-hdr{display:flex;align-items:baseline;gap:2rem;margin-bottom:5rem;}
        .m-sec-num{font-size:0.63rem;letter-spacing:0.3em;text-transform:uppercase;color:var(--warm);}
        .m-sec-ttl{font-family:'Cormorant Garamond',serif;font-size:clamp(2rem,3.5vw,3rem);font-weight:300;color:var(--ink);}
        .m-sec-line{flex:1;height:1px;background:var(--line);}
        .m-about-g{display:grid;grid-template-columns:2fr 1fr;gap:6rem;align-items:start;}
        .m-about-txt{font-size:1.05rem;line-height:1.9;color:var(--accent);font-weight:300;}
        .m-about-txt p+p{margin-top:1.5rem;}
        .m-sbi{padding:1.5rem 0;border-bottom:1px solid var(--line);}
        .m-sbl{font-size:0.58rem;letter-spacing:0.25em;text-transform:uppercase;color:var(--warm);margin-bottom:0.5rem;}
        .m-sbv{font-family:'Cormorant Garamond',serif;font-size:1.1rem;color:var(--ink);}
        .m-pol-bg{background:var(--ink);}
        .m-pol-g{display:grid;grid-template-columns:repeat(2,1fr);}
        .m-pol-c{padding:3.5rem;border:1px solid rgba(255,255,255,0.08);transition:background 0.4s;cursor:default;}
        .m-pol-c:hover{background:rgba(200,169,110,0.06);}
        .m-pol-i{font-size:1.5rem;color:var(--warm);margin-bottom:1.5rem;display:block;}
        .m-pol-t{font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:400;color:var(--paper);margin-bottom:1rem;}
        .m-pol-d{font-size:0.83rem;line-height:1.8;color:rgba(245,243,239,0.5);}
        .m-tl{position:relative;}
        .m-tl::before{content:'';position:absolute;left:0;top:0;bottom:0;width:1px;background:var(--line);}
        .m-tl-item{padding-left:3rem;margin-bottom:3.5rem;position:relative;}
        .m-tl-item::before{content:'';position:absolute;left:-4px;top:6px;width:9px;height:9px;background:var(--warm);border-radius:50%;}
        .m-tl-yr{font-size:0.63rem;letter-spacing:0.25em;text-transform:uppercase;color:var(--warm);margin-bottom:0.4rem;}
        .m-tl-ev{font-family:'Cormorant Garamond',serif;font-size:1.3rem;color:var(--ink);margin-bottom:0.4rem;}
        .m-tl-ds{font-size:0.82rem;color:var(--muted);line-height:1.7;}
        .m-ct-g{display:grid;grid-template-columns:1fr 1fr;gap:8rem;}
        .m-ct-t{font-family:'Cormorant Garamond',serif;font-size:1.8rem;font-weight:300;color:var(--ink);line-height:1.5;}
        .m-form{display:flex;flex-direction:column;gap:1.5rem;}
        .m-fg{display:flex;flex-direction:column;gap:0.4rem;}
        .m-fl{font-size:0.63rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--muted);}
        .m-fi,.m-ft{background:transparent;border:none;border-bottom:1px solid var(--line);padding:0.7rem 0;font-family:'Jost',sans-serif;font-size:0.9rem;color:var(--ink);outline:none;resize:none;transition:border-color 0.3s;}
        .m-fi:focus,.m-ft:focus{border-color:var(--ink);}
        .m-ft{min-height:100px;}
        .m-footer{padding:3rem 6rem;border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;}
        .m-fc{font-size:0.7rem;letter-spacing:0.1em;color:var(--muted);}
        .m-fl-links{display:flex;gap:2rem;}
        .m-fl-links a{font-size:0.7rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--muted);text-decoration:none;transition:color 0.3s;}
        .m-fl-links a:hover{color:var(--ink);}
        @keyframes mSlideUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        @keyframes mFadeIn{from{opacity:0}to{opacity:1}}
        @media(max-width:1024px){
          .m-nav{padding:1.5rem 2.5rem;}
          .m-hero{grid-template-columns:1fr;min-height:auto;}
          .m-hero-left{padding:8rem 2.5rem 4rem;}
          .m-hero-right{height:70vw;position:relative;}
          .m-img-wrap{padding:2rem;}
          .m-stats{grid-template-columns:repeat(2,1fr);}
          .m-stat:nth-child(2){border-right:none;}
          .m-sec{padding:5rem 2.5rem;}
          .m-about-g{grid-template-columns:1fr;gap:3rem;}
          .m-pol-g{grid-template-columns:1fr;}
          .m-ct-g{grid-template-columns:1fr;gap:3rem;}
          .m-footer{padding:2rem 2.5rem;flex-direction:column;gap:1rem;text-align:center;}
        }
        @media(max-width:640px){
          .m-nav{padding:1.2rem 1.5rem;}
          .m-nav-links{display:none;}
          .m-hero-left{padding:7rem 1.5rem 3rem;}
          .m-stats{grid-template-columns:1fr 1fr;}
          .m-sec{padding:4rem 1.5rem;}
          .m-pol-c{padding:2rem 1.5rem;}
          .m-footer{padding:2rem 1.5rem;}
        }
      `}</style>

      {/* NAV */}
      <nav className="m-nav">
        <a href="#" className="m-logo" style={neFont}>{isNe ? "बोध नारायण श्रेष्ठ" : "Bodh Narayan Shrestha"}</a>
        <div className="m-nav-right">
          <ul className="m-nav-links">
            {t.nav.map((l, i) => (
              <li key={l}><a href={`#${t.navIds[i]}`} style={neFont}>{l}</a></li>
            ))}
          </ul>
          <LangToggle lang={lang} setLang={setLang} dark={false} />
        </div>
      </nav>

      {/* HERO */}
      <div className="m-hero" id="hero" style={{paddingTop:'5rem'}}>
        <div className="m-hero-left">
          <p className="m-label" style={neFont}>{t.heroLabel}</p>
          <h1 className="m-name" style={isNe ? {...neFont, lineHeight:1.1} : {}}>
            {t.heroLine1}<br/>{t.heroLine2}
            <em className="m-name-italic" style={neFont}>{t.heroItalic}</em>
          </h1>
          <p className="m-title" style={neFont}>{t.heroTitle}</p>
          <blockquote className="m-quote" style={neFont}>{t.heroQuote}</blockquote>
          <div className="m-cta">
            <a href="#contact" className="m-btn-p" style={neFont}>{t.ctaPrimary}</a>
            <a href="#about" className="m-btn-g" style={neFont}>{t.ctaSecondary}</a>
          </div>
        </div>
        <div className="m-hero-right">
          <div className="m-img-wrap">
            <div className="m-img-frame">
              <div className="m-img-ph">
                <span style={{fontSize:'4rem',opacity:0.3}}>👤</span>
                <span style={{fontSize:'0.65rem',letterSpacing:'0.3em',textTransform:'uppercase',color:'var(--muted)',...neFont}}>
                  {isNe ? "चित्र · बोध नारायण श्रेष्ठ" : "Portrait · Bodh Narayan Shrestha"}
                </span>
              </div>
              <div className="m-yr">{isNe ? "'०६" : "'06"}</div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="m-stats">
        {t.stats.map((s, i) => (
          <div key={i} className="m-stat">
            <div className="m-stat-val" style={neFont}>{s.value}</div>
            <div className="m-stat-lbl" style={neFont}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ABOUT */}
      <section className="m-sec" id="about">
        <div className="m-sec-hdr">
          <span className="m-sec-num">{t.secNums[0]}</span>
          <h2 className="m-sec-ttl" style={neFont}>{t.secTitles[0]}</h2>
          <div className="m-sec-line"/>
        </div>
        <div className="m-about-g">
          <div className="m-about-txt" style={neFont}>
            <p>{t.aboutP1}</p><p>{t.aboutP2}</p><p>{t.aboutP3}</p>
          </div>
          <div>
            {t.sidebarLabels.map((lbl, i) => (
              <div key={i} className="m-sbi">
                <div className="m-sbl" style={neFont}>{lbl}</div>
                <div className="m-sbv" style={neFont}>{t.sidebarValues[i]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POLICIES */}
      <section className="m-pol-bg" id="policies" style={{padding:'7rem 0'}}>
        <div style={{padding:'0 6rem'}}>
          <div className="m-sec-hdr">
            <span className="m-sec-num">{t.secNums[1]}</span>
            <h2 className="m-sec-ttl" style={{...neFont, color:'var(--paper)'}}>{t.secTitles[1]}</h2>
            <div className="m-sec-line" style={{background:'rgba(255,255,255,0.1)'}}/>
          </div>
        </div>
        <div className="m-pol-g">
          {t.policies.map((p, i) => (
            <div key={i} className="m-pol-c">
              <span className="m-pol-i">{p.icon}</span>
              <h3 className="m-pol-t" style={neFont}>{p.title}</h3>
              <p className="m-pol-d" style={neFont}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section className="m-sec" id="journey">
        <div className="m-sec-hdr">
          <span className="m-sec-num">{t.secNums[2]}</span>
          <h2 className="m-sec-ttl" style={neFont}>{t.secTitles[2]}</h2>
          <div className="m-sec-line"/>
        </div>
        <div className="m-tl">
          {t.timeline.map((item, i) => (
            <div key={i} className="m-tl-item">
              <div className="m-tl-yr">{item.year}</div>
              <div className="m-tl-ev" style={neFont}>{item.event}</div>
              <div className="m-tl-ds" style={neFont}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="m-sec" id="contact" style={{background:'rgba(0,0,0,0.02)'}}>
        <div className="m-sec-hdr">
          <span className="m-sec-num">{t.secNums[3]}</span>
          <h2 className="m-sec-ttl" style={neFont}>{t.secTitles[3]}</h2>
          <div className="m-sec-line"/>
        </div>
        <div className="m-ct-g">
          <div>
            <p className="m-ct-t" style={neFont}>{t.contactHeading}</p>
            <div style={{marginTop:'3rem',display:'flex',flexDirection:'column',gap:'1.5rem'}}>
              {t.contactItems.map((c, i) => (
                <div key={i}>
                  <div className="m-sbl" style={neFont}>{c.l}</div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.05rem',color:'var(--ink)',marginTop:'0.3rem',...neFont}}>{c.v}</div>
                </div>
              ))}
            </div>
          </div>
          <form className="m-form" onSubmit={e=>e.preventDefault()}>
            {[0,1,2].map(i => (
              <div key={i} className="m-fg">
                <label className="m-fl" style={neFont}>{t.formLabels[i]}</label>
                <input className="m-fi" type={i===1?'email':'text'} placeholder={t.formPlaceholders[i]}/>
              </div>
            ))}
            <div className="m-fg">
              <label className="m-fl" style={neFont}>{t.formLabels[3]}</label>
              <textarea className="m-ft" placeholder={t.formPlaceholders[3]} rows={5}/>
            </div>
            <button type="submit" className="m-btn-p" style={{alignSelf:'flex-start',...neFont}}>{t.formBtn}</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="m-footer">
        <p className="m-fc" style={neFont}>{t.footerCopy}</p>
        <div className="m-fl-links">
          {t.footerLinks.map(l => <a key={l} href="#" style={neFont}>{l}</a>)}
        </div>
      </footer>
    </div>
  );
}

// ─── COLORFUL SITE ────────────────────────────────────────────────────────────
function ColorfulSite({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const t = T[lang];
  const isNe = lang === "ne";
  const neFont = isNe ? { fontFamily:"'Tiro Devanagari Hindi',serif", lineHeight:1.85 } : {};

  useEffect(() => {
    const s1 = document.createElement('script');
    s1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    s1.onload = () => {
      const s2 = document.createElement('script');
      s2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
      s2.onload = () => {
        const { gsap, ScrollTrigger } = window;
        gsap.registerPlugin(ScrollTrigger);
        gsap.from('.c-hero-text > *', { y:60, opacity:0, stagger:0.15, duration:1, ease:'power3.out', delay:0.3 });
        gsap.utils.toArray('.cp-card').forEach((el, i) => {
          gsap.from(el, { scrollTrigger:{trigger:el,start:'top 85%'}, y:50, opacity:0, duration:0.7, delay:i*0.1, ease:'power2.out' });
        });
        gsap.utils.toArray('.c-sec-title').forEach(el => {
          gsap.from(el, { scrollTrigger:{trigger:el,start:'top 90%'}, x:-40, opacity:0, duration:0.8, ease:'power2.out' });
        });
      };
      document.head.appendChild(s2);
    };
    document.head.appendChild(s1);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const sbLabels = isNe
    ? ["जन्म","निर्वाचन क्षेत्र","दल","शिक्षा","भूमिका"]
    : ["Born","Constituency","Party","Education","Role"];
  const sbVals = isNe
    ? ["मार्च १४, १९६८ — जोधपुर","विजयनगर, वडा ४२","राष्ट्रिय जनमोर्चा","एल.एल.बी · राजस्थान विश्वविद्यालय","विधायक · राज्य वित्त समिति"]
    : ["March 14, 1968 — Jodhpur","Vijaynagar, Ward 42","National People's Front","LLB · Rajasthan University","MLA · State Finance Cmt."];

  return (
    <div style={{fontFamily:"'Jost',sans-serif", background:'#050510', color:'#e2e8f0', overflowX:'hidden'}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&family=Jost:wght@200;300;400;500;600&family=Tiro+Devanagari+Hindi:ital@0;1&display=swap');
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
        html{scroll-behavior:smooth;}
        ::-webkit-scrollbar{width:4px;}
        ::-webkit-scrollbar-track{background:#050510;}
        ::-webkit-scrollbar-thumb{background:linear-gradient(#a78bfa,#60a5fa);border-radius:2px;}
        .c-nav{position:fixed;top:0;left:0;right:0;z-index:1000;display:flex;justify-content:space-between;align-items:center;padding:1.5rem 4rem;transition:all 0.4s;}
        .c-nav.sc{background:rgba(5,5,16,0.93);backdrop-filter:blur(20px);border-bottom:1px solid rgba(167,139,250,0.15);padding:1rem 4rem;}
        .c-logo{font-family:'Cormorant Garamond',serif;font-size:1.3rem;letter-spacing:0.15em;background:linear-gradient(135deg,#a78bfa,#60a5fa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-decoration:none;}
        .c-nav-r{display:flex;align-items:center;gap:2.5rem;}
        .c-nav-links{display:flex;gap:2.5rem;list-style:none;}
        .c-nav-links a{font-size:0.72rem;letter-spacing:0.15em;text-transform:uppercase;color:rgba(226,232,240,0.6);text-decoration:none;transition:color 0.3s;}
        .c-nav-links a:hover{color:#a78bfa;}
        .c-hero{min-height:100vh;display:grid;grid-template-columns:1fr 1fr;padding-top:5rem;position:relative;overflow:hidden;}
        .c-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 70% 50%,rgba(167,139,250,0.08) 0%,transparent 70%),radial-gradient(ellipse at 20% 80%,rgba(96,165,250,0.06) 0%,transparent 60%);}
        .c-hero-text{display:flex;flex-direction:column;justify-content:center;padding:6rem 4rem 6rem 6rem;position:relative;z-index:1;}
        .c-badge{display:inline-flex;align-items:center;gap:0.5rem;padding:0.4rem 1rem;border:1px solid rgba(167,139,250,0.3);border-radius:999px;font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:#a78bfa;margin-bottom:2rem;width:fit-content;background:rgba(167,139,250,0.05);}
        .c-hname{font-family:'Cormorant Garamond',serif;font-size:clamp(3.5rem,6vw,6rem);font-weight:300;line-height:1.0;margin-bottom:1rem;background:linear-gradient(135deg,#f1f5f9 30%,#a78bfa 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
        .c-hrole{font-size:0.75rem;letter-spacing:0.25em;text-transform:uppercase;color:rgba(226,232,240,0.4);margin-bottom:2.5rem;}
        .c-hquote{font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-style:italic;font-weight:300;color:rgba(226,232,240,0.7);line-height:1.7;border-left:2px solid #a78bfa;padding-left:1.5rem;margin-bottom:3rem;max-width:400px;}
        .c-btns{display:flex;gap:1rem;flex-wrap:wrap;}
        .c-btn-g{padding:0.9rem 2.5rem;background:linear-gradient(135deg,#a78bfa,#60a5fa);border:none;border-radius:4px;cursor:pointer;font-family:'Jost',sans-serif;font-size:0.72rem;letter-spacing:0.15em;text-transform:uppercase;color:white;text-decoration:none;transition:all 0.3s;display:inline-block;box-shadow:0 0 30px rgba(167,139,250,0.3);}
        .c-btn-g:hover{transform:translateY(-3px);box-shadow:0 0 50px rgba(167,139,250,0.5);}
        .c-btn-o{padding:0.9rem 2.5rem;background:transparent;border:1px solid rgba(167,139,250,0.4);border-radius:4px;cursor:pointer;font-family:'Jost',sans-serif;font-size:0.72rem;letter-spacing:0.15em;text-transform:uppercase;color:#a78bfa;text-decoration:none;transition:all 0.3s;display:inline-block;}
        .c-btn-o:hover{background:rgba(167,139,250,0.1);transform:translateY(-3px);}
        .c-hr{position:relative;display:flex;align-items:center;justify-content:center;padding:4rem 4rem 4rem 2rem;}
        .c-pw{position:relative;width:380px;}
        .c-pglow{position:absolute;inset:-40px;background:radial-gradient(circle,rgba(167,139,250,0.2) 0%,transparent 70%);animation:pglow 3s ease-in-out infinite;}
        @keyframes pglow{0%,100%{opacity:0.5;transform:scale(1)}50%{opacity:1;transform:scale(1.05)}}
        .c-pring{position:absolute;inset:-20px;border:1px solid rgba(167,139,250,0.2);border-radius:8px;animation:pring 15s linear infinite;}
        @keyframes pring{from{transform:rotate(0)}to{transform:rotate(360deg)}}
        .c-portrait{width:100%;aspect-ratio:3/4;background:linear-gradient(135deg,#1a1040,#0d1b40);border-radius:6px;overflow:hidden;position:relative;z-index:1;border:1px solid rgba(167,139,250,0.2);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;}
        .c-stats{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.02);}
        .c-st{padding:3rem 2rem;text-align:center;border-right:1px solid rgba(255,255,255,0.06);transition:background 0.3s;}
        .c-st:last-child{border-right:none;}
        .c-st:hover{background:rgba(167,139,250,0.05);}
        .c-stv{font-family:'Cormorant Garamond',serif;font-size:3.5rem;font-weight:300;background:linear-gradient(135deg,#a78bfa,#60a5fa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1;margin-bottom:0.5rem;}
        .c-stl{font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:rgba(226,232,240,0.4);}
        .c-sec{padding:7rem 6rem;}
        .c-sec-hdr{display:flex;align-items:center;gap:2rem;margin-bottom:5rem;}
        .c-sec-n{font-size:0.6rem;letter-spacing:0.3em;text-transform:uppercase;color:#a78bfa;}
        .c-sec-title{font-family:'Cormorant Garamond',serif;font-size:clamp(2rem,3.5vw,3rem);font-weight:300;background:linear-gradient(135deg,#f1f5f9,#a78bfa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
        .c-sec-line{flex:1;height:1px;background:linear-gradient(90deg,rgba(167,139,250,0.3),transparent);}
        .c-pgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;}
        .cp-card{padding:2.5rem;border-radius:12px;border:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.02);transition:all 0.4s;cursor:default;position:relative;overflow:hidden;}
        .cp-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--cc);transform:scaleX(0);transform-origin:left;transition:transform 0.4s;}
        .cp-card:hover{transform:translateY(-8px);border-color:var(--cc);box-shadow:0 20px 60px rgba(0,0,0,0.4);background:rgba(255,255,255,0.04);}
        .cp-card:hover::before{transform:scaleX(1);}
        .cp-icon{font-size:2rem;margin-bottom:1.5rem;display:block;}
        .cp-title{font-family:'Cormorant Garamond',serif;font-size:1.4rem;color:#f1f5f9;margin-bottom:0.8rem;}
        .cp-desc{font-size:0.83rem;line-height:1.8;color:rgba(226,232,240,0.5);}
        .c-tl{position:relative;max-width:800px;margin:0 auto;}
        .c-tl::before{content:'';position:absolute;left:50%;top:0;bottom:0;width:1px;background:linear-gradient(to bottom,transparent,rgba(167,139,250,0.4),transparent);transform:translateX(-50%);}
        .c-tli{display:grid;grid-template-columns:1fr 1fr;gap:3rem;margin-bottom:3.5rem;align-items:center;}
        .c-tli:nth-child(odd) .c-tl-c{grid-column:1;text-align:right;}
        .c-tli:nth-child(odd) .c-tl-y{grid-column:2;}
        .c-tli:nth-child(even) .c-tl-c{grid-column:2;}
        .c-tli:nth-child(even) .c-tl-y{grid-column:1;order:-1;text-align:right;}
        .c-tl-dot{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:12px;height:12px;background:linear-gradient(135deg,#a78bfa,#60a5fa);border-radius:50%;box-shadow:0 0 20px rgba(167,139,250,0.5);}
        .c-tl-yt{font-family:'Cormorant Garamond',serif;font-size:2.5rem;font-weight:300;color:rgba(167,139,250,0.3);line-height:1;}
        .c-tl-ev{font-family:'Cormorant Garamond',serif;font-size:1.25rem;color:#f1f5f9;margin-bottom:0.5rem;}
        .c-tl-ds{font-size:0.8rem;line-height:1.8;color:rgba(226,232,240,0.5);}
        .c-ctg{display:grid;grid-template-columns:1fr 1fr;gap:5rem;}
        .c-cti{padding:1.5rem;border:1px solid rgba(167,139,250,0.15);border-radius:8px;background:rgba(167,139,250,0.03);transition:all 0.3s;}
        .c-cti:hover{border-color:rgba(167,139,250,0.3);background:rgba(167,139,250,0.06);transform:translateX(6px);}
        .c-ctl{font-size:0.6rem;letter-spacing:0.25em;text-transform:uppercase;color:#a78bfa;margin-bottom:0.4rem;}
        .c-ctv{font-size:0.9rem;color:rgba(226,232,240,0.8);}
        .c-form{display:flex;flex-direction:column;gap:1.2rem;}
        .c-fg{display:flex;flex-direction:column;gap:0.4rem;}
        .c-fl{font-size:0.62rem;letter-spacing:0.2em;text-transform:uppercase;color:rgba(226,232,240,0.4);}
        .c-fi,.c-fta{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:0.8rem 1rem;font-family:'Jost',sans-serif;font-size:0.88rem;color:#f1f5f9;outline:none;resize:none;transition:all 0.3s;}
        .c-fi:focus,.c-fta:focus{border-color:rgba(167,139,250,0.4);background:rgba(167,139,250,0.04);box-shadow:0 0 20px rgba(167,139,250,0.1);}
        .c-fta{min-height:120px;}
        footer.c-footer{padding:3rem 6rem 8rem;border-top:1px solid rgba(255,255,255,0.06);display:flex;justify-content:space-between;align-items:center;background:rgba(0,0,0,0.2);}
        .c-fcp{font-size:0.7rem;letter-spacing:0.1em;color:rgba(226,232,240,0.3);}
        .c-fl-links{display:flex;gap:2rem;}
        .c-fl-links a{font-size:0.68rem;letter-spacing:0.12em;text-transform:uppercase;color:rgba(226,232,240,0.3);text-decoration:none;transition:color 0.3s;}
        .c-fl-links a:hover{color:#a78bfa;}
        .c-particles{position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden;}
        .c-pt{position:absolute;border-radius:50%;background:radial-gradient(circle,rgba(167,139,250,0.3),transparent);animation:fpt linear infinite;}
        @keyframes fpt{0%{transform:translateY(100vh) rotate(0);opacity:0}10%{opacity:1}90%{opacity:1}100%{transform:translateY(-100px) rotate(720deg);opacity:0}}
        @media(max-width:1024px){
          .c-nav{padding:1.5rem 2rem;}
          .c-hero{grid-template-columns:1fr;}
          .c-hero-text{padding:8rem 2.5rem 4rem;}
          .c-hr{padding:2.5rem;justify-content:center;}
          .c-pw{width:280px;}
          .c-stats{grid-template-columns:repeat(2,1fr);}
          .c-sec{padding:5rem 2.5rem;}
          .c-pgrid{grid-template-columns:repeat(2,1fr);}
          .c-ctg{grid-template-columns:1fr;gap:3rem;}
          footer.c-footer{padding:2.5rem 2.5rem 8rem;flex-direction:column;gap:1rem;text-align:center;}
          .c-tl::before{left:20px;}
          .c-tli{grid-template-columns:1fr;gap:0.5rem;padding-left:3.5rem;}
          .c-tli:nth-child(odd) .c-tl-c,.c-tli:nth-child(even) .c-tl-c{grid-column:1;text-align:left;}
          .c-tli:nth-child(odd) .c-tl-y,.c-tli:nth-child(even) .c-tl-y{grid-column:1;order:-1;text-align:left;}
          .c-tl-dot{left:20px;}
        }
        @media(max-width:640px){
          .c-nav-links{display:none;}
          .c-hero-text{padding:7rem 1.5rem 3rem;}
          .c-pgrid{grid-template-columns:1fr;}
          .c-sec{padding:4rem 1.5rem;}
          footer.c-footer{padding:2rem 1.5rem 8rem;}
          .c-stats{grid-template-columns:1fr 1fr;}
        }
      `}</style>

      {/* Particles */}
      <div className="c-particles">
        {Array.from({length:12}).map((_,i)=>(
          <div key={i} className="c-pt" style={{
            left:`${Math.random()*100}%`, width:`${4+Math.random()*8}px`, height:`${4+Math.random()*8}px`,
            animationDuration:`${8+Math.random()*15}s`, animationDelay:`${Math.random()*8}s`,
          }}/>
        ))}
      </div>

      {/* NAV */}
      <nav className={`c-nav ${scrolled?'sc':''}`}>
        <a href="#" className="c-logo" style={neFont}>{isNe?"बोध नारायण श्रेष्ठ":"Bodh Narayan Shrestha"}</a>
        <div className="c-nav-r">
          <ul className="c-nav-links">
            {t.nav.map((l,i)=>(
              <li key={l}><a href={`#c-${t.navIds[i]}`} style={neFont}>{l}</a></li>
            ))}
          </ul>
          <LangToggle lang={lang} setLang={setLang} dark={true}/>
        </div>
      </nav>

      {/* HERO */}
      <section className="c-hero" id="c-hero" style={{position:'relative',zIndex:1}}>
        <div className="c-hero-text">
          <div className={`c-badge`} style={neFont}><span>⬡</span>{t.colorfulBadge}</div>
          <h1 className="c-hname" style={isNe?{...neFont,fontSize:'clamp(2.8rem,5vw,5rem)'}:{}}>
            {t.heroLine1}<br/>{t.heroLine2}
          </h1>
          <p className="c-hrole" style={neFont}>{t.cHeroRole}</p>
          <blockquote className="c-hquote" style={neFont}>{t.heroQuote}</blockquote>
          <div className="c-btns">
            <a href="#c-contact" className="c-btn-g" style={neFont}>{t.cCtaPrimary}</a>
            <a href="#c-about" className="c-btn-o" style={neFont}>{t.cCtaSecondary}</a>
          </div>
        </div>
        <div className="c-hr">
          <div className="c-pw">
            <div className="c-pglow"/>
            <div className="c-pring"/>
            <div className="c-portrait">
              <span style={{fontSize:'5rem',opacity:0.3}}>👤</span>
              <span style={{fontSize:'0.65rem',letterSpacing:'0.3em',textTransform:'uppercase',color:'rgba(167,139,250,0.5)',...neFont}}>
                {isNe?"चित्र · बोध नारायण श्रेष्ठ":"Portrait · Bodh Narayan Shrestha"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="c-stats">
        {t.stats.map((s,i)=>(
          <div key={i} className="c-st">
            <div className="c-stv" style={neFont}>{s.value}</div>
            <div className="c-stl" style={neFont}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ABOUT */}
      <section className="c-sec" id="c-about">
        <div className="c-sec-hdr">
          <span className="c-sec-n">{t.secNums[0]}</span>
          <h2 className="c-sec-title" style={neFont}>{t.secTitles[0]}</h2>
          <div className="c-sec-line"/>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'3fr 2fr',gap:'5rem',alignItems:'start'}}>
          <div style={{fontSize:'1rem',lineHeight:'1.9',color:'rgba(226,232,240,0.65)',fontWeight:300,...neFont}}>
            <p>{t.aboutP1}</p><p style={{marginTop:'1.5rem'}}>{t.aboutP2}</p><p style={{marginTop:'1.5rem'}}>{t.aboutP3}</p>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
            {sbLabels.map((lbl,i)=>(
              <div key={i} style={{padding:'1rem',borderRadius:8,border:'1px solid rgba(167,139,250,0.12)',background:'rgba(167,139,250,0.02)'}}>
                <div style={{fontSize:'0.58rem',letterSpacing:'0.25em',textTransform:'uppercase',color:'#a78bfa',marginBottom:'0.3rem',...neFont}}>{lbl}</div>
                <div style={{fontSize:'0.88rem',color:'rgba(226,232,240,0.8)',...neFont}}>{sbVals[i]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POLICIES */}
      <section className="c-sec" id="c-policies" style={{background:'rgba(0,0,0,0.2)'}}>
        <div className="c-sec-hdr">
          <span className="c-sec-n">{t.secNums[1]}</span>
          <h2 className="c-sec-title" style={neFont}>{t.secTitles[1]}</h2>
          <div className="c-sec-line"/>
        </div>
        <div className="c-pgrid">
          {t.colorfulPolicies.map((p,i)=>(
            <div key={i} className="cp-card" style={{'--cc':p.color}}>
              <span className="cp-icon">{p.icon}</span>
              <h3 className="cp-title" style={neFont}>{p.title}</h3>
              <p className="cp-desc" style={neFont}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section className="c-sec" id="c-journey">
        <div className="c-sec-hdr">
          <span className="c-sec-n">{t.secNums[2]}</span>
          <h2 className="c-sec-title" style={neFont}>{t.secTitles[2]}</h2>
          <div className="c-sec-line"/>
        </div>
        <div className="c-tl">
          {t.timeline.map((item,i)=>(
            <div key={i} className="c-tli" style={{position:'relative'}}>
              <div className="c-tl-dot"/>
              <div className="c-tl-y"><div className="c-tl-yt">{item.year}</div></div>
              <div className="c-tl-c">
                <div className="c-tl-ev" style={neFont}>{item.event}</div>
                <div className="c-tl-ds" style={neFont}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="c-sec" id="c-contact" style={{background:'rgba(0,0,0,0.15)'}}>
        <div className="c-sec-hdr">
          <span className="c-sec-n">{t.secNums[3]}</span>
          <h2 className="c-sec-title" style={neFont}>{t.secTitles[3]}</h2>
          <div className="c-sec-line"/>
        </div>
        <div className="c-ctg">
          <div>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'1.7rem',fontWeight:300,color:'rgba(226,232,240,0.7)',lineHeight:1.5,marginBottom:'1.5rem',...neFont}}>{t.cContactHeading}</p>
            <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
              {t.contactItems.map((c,i)=>(
                <div key={i} className="c-cti">
                  <div className="c-ctl" style={neFont}>{c.l}</div>
                  <div className="c-ctv" style={neFont}>{c.v}</div>
                </div>
              ))}
            </div>
          </div>
          <form className="c-form" onSubmit={e=>e.preventDefault()}>
            {[0,1,2].map(i=>(
              <div key={i} className="c-fg">
                <label className="c-fl" style={neFont}>{t.formLabels[i]}</label>
                <input className="c-fi" type={i===1?'email':'text'} placeholder={t.formPlaceholders[i]}/>
              </div>
            ))}
            <div className="c-fg">
              <label className="c-fl" style={neFont}>{t.formLabels[3]}</label>
              <textarea className="c-fta" placeholder={t.formPlaceholders[3]} rows={5}/>
            </div>
            <button type="submit" className="c-btn-g" style={{alignSelf:'flex-start',...neFont}}>{t.formBtn}</button>
          </form>
        </div>
      </section>

      <footer className="c-footer">
        <p className="c-fcp" style={neFont}>{t.footerCopy}</p>
        <div className="c-fl-links">
          {t.footerLinks.map(l=><a key={l} href="#" style={neFont}>{l}</a>)}
        </div>
      </footer>

      <MusicPlayer label={t.musicLabel}/>
    </div>
  );
}

// ─── ROOT APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [version, setVersion] = useState("minimal");
  const [showPopup, setShowPopup] = useState(true);
  const [lang, setLang] = useState("ne"); // ← Default: Nepali

  return (
    <>
      <SEOMeta lang={lang}/>
      {version === "minimal"
        ? <MinimalSite lang={lang} setLang={setLang}/>
        : <ColorfulSite lang={lang} setLang={setLang}/>
      }
      {showPopup && version === "minimal" && (
        <VersionPopup
          t={T[lang]}
          onYes={() => { setVersion("colorful"); setShowPopup(false); }}
          onNo={() => setShowPopup(false)}
        />
      )}
    </>
  );
}
