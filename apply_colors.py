import os
import re

components_dir = r"c:\Users\rpuer\Desktop\Escritorio\portfolioReact\src\components"
css_path = r"c:\Users\rpuer\Desktop\Escritorio\portfolioReact\src\index.css"

replacements = {
    # Typography colors
    "text-gray-900": "text-[#fffff0]",
    "text-gray-800": "text-[#fffff0]",
    "text-stone-600": "text-[#fffff0]/80",
    "text-stone-500": "text-[#fffff0]/60",
    "text-stone-400": "text-[#fffff0]/40",
    "text-stone-300": "text-[#fffff0]/30",
    "text-black/40": "text-[#fffff0]/40",
    "text-black/30": "text-[#fffff0]/30",
    "text-black": "text-[#022c22]",
    
    # Borders
    "border-stone-200/50": "border-[#fffff0]/20",
    "border-stone-200": "border-[#fffff0]/20",
    
    # Backgrounds & interactive
    "bg-white/40": "bg-[#fffff0]/10",
    "bg-gray-900": "bg-[#facc15]",
    "hover:bg-black": "hover:bg-[#fde047]",
    "bg-stone-300": "bg-[#fffff0]/30",
    "bg-stone-200": "bg-[#fffff0]/20",
    
    # Specific buttons text inversion (dark button -> yellow button)
    "hover:text-black": "hover:text-[#022c22]",
    "bg-white/10 backdrop-blur-sm": "bg-[#fffff0]/10 backdrop-blur-sm",
    
    # Sidebar custom inline styles
    "'rgba(245,245,240,0.92)'": "'rgba(2,44,34,0.4)'",
    "'rgba(0,0,0,0.08)'": "'rgba(255,255,240,0.1)'",
    "'#0d0d0d'": "'#facc15'",
    "'rgba(0,0,0,0.2)'": "'rgba(255,255,240,0.3)'",
    "'0 0 6px rgba(0,0,0,0.3)'": "'0 0 6px rgba(250,204,21,0.5)'",
    
    # Particles
    "'rgba(0, 0, 0, 0.15)'": "'rgba(250, 204, 21, 0.4)'",
    "'rgba(0, 0, 0, ' + (opacityValue * 0.2) + ')'": "'rgba(250, 204, 21, ' + (opacityValue * 0.5) + ')'",
}

for filename in os.listdir(components_dir):
    if filename.endswith(".jsx"):
        filepath = os.path.join(components_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
            
        new_content = content
        for old, new in replacements.items():
            new_content = new_content.replace(old, new)
        
        new_content = new_content.replace("bg-[#facc15] hover:bg-[#fde047] text-white", "bg-[#facc15] hover:bg-[#fde047] text-[#022c22]")
            
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)

# Update CSS
with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

css = re.sub(
    r":root\s*\{[^}]+\}",
    ":root {\n  --sidebar-w: 72px;\n  --fg: #fffff0;\n  --fg-dim: rgba(255,255,240,0.70);\n  --fg-dim2: rgba(255,255,240,0.30);\n  --accent: #facc15;\n  --accent-bright: #fde047;\n  --line: rgba(255,255,240,0.15);\n  --font: 'Inter', sans-serif;\n}",
    css
)

css = re.sub(
    r"background:\s*linear-gradient\([^;]+\);",
    "background: linear-gradient(to bottom, #064e3b, #022c22);",
    css
)

css = css.replace("background: rgba(255,255,255,0.6);", "background: rgba(2,44,34,0.4);")
css = css.replace("background: #fff;", "background: #022c22;")
css = css.replace("border: 1px solid rgba(0,0,0,0.08);", "border: 1px solid rgba(255,255,240,0.1);")

with open(css_path, "w", encoding="utf-8") as f:
    f.write(css)

print("Styles updated to Dark Green, Ivory, and Yellow.")
