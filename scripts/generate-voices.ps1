param([string]$OutputDirectory = (Join-Path $PSScriptRoot '../public/audio'))
$ErrorActionPreference='Stop'
Add-Type -AssemblyName System.Speech
$directory = New-Item -ItemType Directory -Force -Path $OutputDirectory
$manifest = & node --input-type=module -e "import {VOICES} from './src/voice-lines.js'; console.log(JSON.stringify(VOICES));"
$voices = $manifest | ConvertFrom-Json -AsHashtable
$format = [System.Speech.AudioFormat.SpeechAudioFormatInfo]::new(16000,[System.Speech.AudioFormat.AudioBitsPerSample]::Sixteen,[System.Speech.AudioFormat.AudioChannel]::Mono)
$synth = [System.Speech.Synthesis.SpeechSynthesizer]::new()
try {
  foreach($id in $voices.Keys){
    $profile=$voices[$id]; $synth.Rate=[int]$profile.rate; $synth.Volume=90
    foreach($key in $profile.Keys){
      if($key -in 'rate','pitch'){continue}
      $file=Join-Path $directory.FullName "$id-$key.wav"
      $synth.SetOutputToWaveFile($file,$format)
      $synth.Speak([string]$profile[$key]); $synth.SetOutputToNull()
      Write-Output "$id-$key.wav"
    }
  }
} finally { $synth.Dispose() }
& node scripts/process-voices.mjs $directory.FullName
