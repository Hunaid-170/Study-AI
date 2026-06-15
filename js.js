 tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: { 50:'#EEF2FF',100:'#E0E7FF',200:'#C7D2FE',400:'#818CF8',500:'#6366F1',600:'#4F46E5',700:'#4338CA',900:'#312E81' },
          secondary: { 50:'#ECFEFF',100:'#CFFAFE',400:'#22D3EE',500:'#06B6D4',600:'#0891B2',900:'#164E63' },
          accent: { 50:'#ECFDF5',100:'#D1FAE5',400:'#34D399',500:'#10B981',600:'#059669',900:'#064E3B' },
          surface: '#F8FAFC',
          ink: { 900:'#0F172A',800:'#1E293B',700:'#334155',500:'#64748B',400:'#94A3B8' },
          darkbg: '#0B0F19',
          darksurface: '#111827',
          darkcard: '#161D2E'
        },
        fontFamily: {
          display: ['Manrope','sans-serif'],
          body: ['Inter','sans-serif'],
          mono: ['JetBrains Mono','monospace']
        },
        boxShadow: {
          soft: '0 4px 24px -4px rgba(79,70,229,0.10), 0 2px 8px -2px rgba(15,23,42,0.06)',
          glow: '0 8px 40px -8px rgba(79,70,229,0.35)',
          card: '0 1px 2px rgba(15,23,42,0.04), 0 1px 12px rgba(15,23,42,0.05)'
        },
        borderRadius: { '2xl':'1.25rem', '3xl':'1.75rem' },
        keyframes: {
          float: { '0%,100%':{ transform:'translateY(0px)' }, '50%':{ transform:'translateY(-12px)' } },
          floatSlow: { '0%,100%':{ transform:'translateY(0px) rotate(0deg)' }, '50%':{ transform:'translateY(-8px) rotate(3deg)' } },
          fadeUp: { '0%':{ opacity:'0', transform:'translateY(24px)' }, '100%':{ opacity:'1', transform:'translateY(0)' } },
          fadeIn: { '0%':{ opacity:'0' }, '100%':{ opacity:'1' } },
          typing: { '0%':{ width:'0' }, '100%':{ width:'100%' } },
          blink: { '0%,50%':{ opacity:'1' }, '51%,100%':{ opacity:'0' } },
          gradientShift: { '0%,100%':{ backgroundPosition:'0% 50%' }, '50%':{ backgroundPosition:'100% 50%' } },
          pulseRing: { '0%':{ boxShadow:'0 0 0 0 rgba(16,185,129,0.4)' }, '70%':{ boxShadow:'0 0 0 10px rgba(16,185,129,0)' }, '100%':{ boxShadow:'0 0 0 0 rgba(16,185,129,0)' } },
          countUp: { '0%':{ opacity:'0', transform:'translateY(8px)' }, '100%':{ opacity:'1', transform:'translateY(0)' } },
          marquee: { '0%':{ transform:'translateX(0)' }, '100%':{ transform:'translateX(-50%)' } }
        },
        animation: {
          float: 'float 6s ease-in-out infinite',
          floatSlow: 'floatSlow 8s ease-in-out infinite',
          fadeUp: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
          fadeIn: 'fadeIn 0.8s ease forwards',
          gradientShift: 'gradientShift 8s ease infinite',
          pulseRing: 'pulseRing 2s infinite',
          marquee: 'marquee 30s linear infinite'
        }
      }
    }
  }