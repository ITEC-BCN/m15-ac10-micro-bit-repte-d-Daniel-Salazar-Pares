//  Reto 4: Mostrar "calor" o "fred" según la temperatura
function check_temperature() {
    let temperature = input.temperature()
    if (temperature > 22) {
        basic.showString("CALOR")
    } else {
        basic.showString("FRED")
    }
    
}

//  Reto 5: Reproducir melodía según el nivel de luz
function check_light_level() {
    let light_level = input.lightLevel()
    if (light_level > 200) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
    } else if (light_level < 50) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.InBackground)
    }
    
}

//  Bucle principal para ambos retos
//  Espera un segundo entre cada revisión
basic.forever(function on_forever() {
    check_temperature()
    check_light_level()
    basic.pause(1000)
})
