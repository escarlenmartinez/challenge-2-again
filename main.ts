while (true) {
    console.log("light.level:" + input.lightLevel())
    if (input.lightLevel() > 19) {
        light.clear()
    } else if (input.lightLevel() < 6) {
        light.setAll(light.rgb(0, 0, 255))
    } else {
        input.lightLevel() > 2 && 2 < 10
        light.setAll(light.rgb(238, 121, 23))
    }
    
}
