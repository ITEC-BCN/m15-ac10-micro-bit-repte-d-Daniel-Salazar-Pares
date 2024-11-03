# Reto 4: Mostrar "calor" o "fred" según la temperatura
def check_temperature():
    temperature = input.temperature()
    if temperature > 22:
        basic.show_string("CALOR")
    else:
        basic.show_string("FRED")

# Reto 5: Reproducir melodía según el nivel de luz
def check_light_level():
    light_level = input.light_level()
    if light_level > 200:
        music._play_default_background(music.built_in_playable_melody(Melodies.ENTERTAINER), music.PlaybackMode.IN_BACKGROUND)
    elif light_level < 50:
        music._play_default_background(music.built_in_playable_melody(Melodies.NYAN), music.PlaybackMode.IN_BACKGROUND)

# Bucle principal para ambos retos
def on_forever():
    check_temperature()
    check_light_level()
    basic.pause(1000)  # Espera un segundo entre cada revisión

basic.forever(on_forever)