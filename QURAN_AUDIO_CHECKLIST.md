# Quran Audio Checklist

Place these files in:
- `audios/quran/`

For Capacitor/webDir sync, make sure they are also available in:
- `www/audios/quran/`

## Expected files

### الفاتحة
- fatiha_1.mp3
- fatiha_2.mp3
- fatiha_3.mp3
- fatiha_4.mp3
- fatiha_5.mp3
- fatiha_6.mp3
- fatiha_7.mp3

### الكافرون
- kafirun_1.mp3
- kafirun_2.mp3
- kafirun_3.mp3
- kafirun_4.mp3
- kafirun_5.mp3
- kafirun_6.mp3

### النصر
- nasr_1.mp3
- nasr_2.mp3
- nasr_3.mp3

### المسد
- masad_1.mp3
- masad_2.mp3
- masad_3.mp3
- masad_4.mp3
- masad_5.mp3

### الإخلاص
- ikhlas_1.mp3
- ikhlas_2.mp3
- ikhlas_3.mp3
- ikhlas_4.mp3

### الفلق
- falaq_1.mp3
- falaq_2.mp3
- falaq_3.mp3
- falaq_4.mp3
- falaq_5.mp3

### الناس
- nas_1.mp3
- nas_2.mp3
- nas_3.mp3
- nas_4.mp3
- nas_5.mp3
- nas_6.mp3

---

## Quick check (PowerShell)

Run from the project root:

```powershell
$expected = @(
  'fatiha_1.mp3','fatiha_2.mp3','fatiha_3.mp3','fatiha_4.mp3','fatiha_5.mp3','fatiha_6.mp3','fatiha_7.mp3',
  'kafirun_1.mp3','kafirun_2.mp3','kafirun_3.mp3','kafirun_4.mp3','kafirun_5.mp3','kafirun_6.mp3',
  'nasr_1.mp3','nasr_2.mp3','nasr_3.mp3',
  'masad_1.mp3','masad_2.mp3','masad_3.mp3','masad_4.mp3','masad_5.mp3',
  'ikhlas_1.mp3','ikhlas_2.mp3','ikhlas_3.mp3','ikhlas_4.mp3',
  'falaq_1.mp3','falaq_2.mp3','falaq_3.mp3','falaq_4.mp3','falaq_5.mp3',
  'nas_1.mp3','nas_2.mp3','nas_3.mp3','nas_4.mp3','nas_5.mp3','nas_6.mp3'
)

$base = 'audios/quran'
$missing = $expected | Where-Object { -not (Test-Path (Join-Path $base $_)) }

if ($missing.Count -eq 0) {
  '✅ All Quran audio files are present.'
} else {
  '❌ Missing files:'
  $missing
}
```
