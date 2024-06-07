basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.stopcar()
        basic.pause(1000)
        cuteBot.moveTime(cuteBot.Direction.backward, 50, 3)
        basic.pause(1000)
        cuteBot.turnleft()
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
        music.play(music.stringPlayable("F - F - F - F - ", 120), music.PlaybackMode.UntilDone)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.stopcar()
        basic.pause(1000)
        cuteBot.moveTime(cuteBot.Direction.backward, 50, 3)
        basic.pause(1000)
        cuteBot.turnleft()
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
        music.play(music.stringPlayable("F - F - F - F - ", 120), music.PlaybackMode.UntilDone)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.stopcar()
        basic.pause(1000)
        cuteBot.moveTime(cuteBot.Direction.backward, 50, 3)
        basic.pause(1000)
        cuteBot.turnleft()
        cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
        music.play(music.stringPlayable("F - F - F - F - ", 120), music.PlaybackMode.UntilDone)
    } else {
        cuteBot.forward()
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
    }
})
