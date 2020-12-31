while True:
    print("light.level:" + input.light_level())
    if input.light_level() > 19:
        light.clear()
    elif input.light_level() < 6:
        light.set_all(light.rgb(0, 0, 255))
    else:
        input.light_level() > 2 < 10
        light.set_all(light.rgb(238, 121, 23))
