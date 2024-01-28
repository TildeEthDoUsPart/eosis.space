VERSION = "1.6"

error = [
    "<span id='error'>Command not found. Type '<span id='command'>help</span>' to get a list of all available commands.</span>"
]

help = [
    "<span id='command'>about</span> : about me",
    "<span id='command'>setup</span> : my setup and uses",
    "<span id='command'>blog</span> : my personal blog",
    "<span id='command'>projects</span> : some of my programming projects",
    "<span id='command'>skills</span> : check out the skills I have",
    "<span id='command'>socials</span> : my social networks",
    "<span id='command'>repo</span> : view github repo for this site",
    "<span id='command'>motd</span> : display the motd header",
    "<span id='command'>clear</span>/<span id='command'>cls</span> : clear the terminal",
    "<span id='command'>theme</span>/<span id='command'>themes</span> : see list / change terminal theme",
    "<span id='command'>reload</span>/<span id='command'>r</span> : reload the terminal",
    "<span id='command'>history</span> : command history",
    "<span id='command'>help</span> : get a list of all available commands"
]

about = [
    "Hi ! I'm <span id='accent'>eosis</span> !",
    "I'm a CS enthusiast and <span id='accent'>web developer</span> who loves coding, tinkering and learning.",
    "I started to code when I was 10 (as a hobby), and I've been really into it for 2 years now.",
    "Currently, I am in France, at <span id='accent'>EPSI</span> studying CS, and will soon get a work/study contract.", 
    "Loving building websites and webapps and paying attention to the <span id='accent'>details</span> to craft perfect user (and developer) experiences.",
    "As the days go by, I try to learn new things, and work on my current projects, while having more and more ideas.",
    " ",
    "Playing <span id='accent'>video games</span> sometimes, even though I've greatly reduced my playing time to code more.",
    "Some of my favorite games are : Minecraft, Albion Online, No Man's sky, Noita, Hypixel Skyblock, CBP 2077, Beat Saber...",
    " ",
    "Loving trains, subways, planes and everything <span id='accent'>public transport</span>.",
    "Passioned by <span id='accent'>broadcasting</span>, OBS, behind-the-scenes, aftermovies, gaming events, technical side of television and live events.",
    "If I ever get bored of typing on my keyboard, you'll probably find me in the driver's cab of a train, or in <span id='accent'>CDG airport</span>",
    "working as a station agent, or in a <span id='accent'>venue/festival</span>, setting cables and gear, pushing buttons and managing an event in real time.",
    " ",
    "Enjoying long, deep and <span id='accent'>progressive music</span> with EDM and classical music vibes. Perfect example of this is <span id='underline'><a href='https://youtube.com/@worakls' target='_blank'>Worakls</a></span>, my favorite artist.",
    "Also trying to make my own music with a <span id='accent'>modular synth</span> (VCVRack).",
    " ",
    "Huge fan of <span id='accent'>workspace aesthethics</span>, and setups in general.",
    "Loving clutter-minimal desks setups, and even made myself one I'm proud of over the years.",
    "Use the <span id='command'>setup</span> command if you'd like to see it."
]

setup = [
    "Over the years, I have gathered a lot of tools and equipment to make my setup. I am not so far from reaching my",
    "'<span id='accent'>dream setup</span>', as after being a clutter-core fan, then a minimalist enjoyer, I think I am done with it and have everyting I need.",
    " ",
    "want some <span id='accent'>photos</span> ? (soon)",
    " ",
    "<span id='underline'>workstation</span>&nbsp:&nbsplenovo ideapad3 (i3 / 8Gb)",
    "<span id='underline'>terminal</span>&nbsp:&nbspwindows terminal + starship <a href='https://github.com/eosiswastaken/dotfiles/tree/main' target='_blank'>(dotfile)</a>",
    "<span id='underline'>browser</span>&nbsp:&nbspfirefox",
    "<span id='underline'>editor</span>&nbsp:&nbspVSCode <a href='https://github.com/eosiswastaken/dotfiles/tree/main' target='_blank'>(dotfile)</a>",
    "<span id='underline'>notes</span>&nbsp:&nbspnotion + todoist + habitkit + notion calendar",
    "<span id='underline'>launcher</span>&nbsp:&nbspflow",
    " ",
    "<span id='underline'>keyboard</span>&nbsp:&nbspnuphy air60 + logitech g305 + keyboard cleaning kit",
    "<span id='underline'>phone</span>&nbsp:&nbsp redmi note 8 pro w/ niagara",
    " ",
    "<span id='underline'>gamestation</span>&nbsp:&nbspMag A520M Vector + 16Gb + RX 6700 XT + Ryzen Pro 4650G + 2To HDD + 256Go SSD + 256Gb backup drive + 8bitdo USB",
    "<span id='underline'>monitors</span>&nbsp:&nbspAsus VG27AQ + AOC Q27G2E",
    " ",
    "<span id='underline'>audio</span>&nbsp:&nbspFifine T669B + Stream Deck MK2 + (HyperX Alpha || Klim Fusion) + Akai LPD8 + Akai LPK25",
    "<span id='underline'>gear</span>&nbsp:&nbspSwitch pro controller + Raspberry Pi 3B+ + Divoom Ditoo + cool plant + woven deskmat",
    "<span id='underline'>lights</span>&nbsp:&nbsp2 Ikea ringlights + Govee LEDs",
    " ",
    "<span id='underline'>travel</span>&nbsp:&nbspNative Union stove -> Sony WF-C500 + 30W charger + USB-C/USB-A cables + pens + notebooks + cloth + 128Gb Medicat USB"
]

cat = [
    `&nbsp/\\_/\\ `,
    `( o.o ) &nbsp < <span id="meow">meow :3</span>`,
    `&nbsp> ^ < `
]

motd = [
    `&nbsp|\\_/| &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp_`,
    `&nbsp(. .) &nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp___ &nbsp____  &nbsp_____(_)____`,
    `&nbsp&nbsp=w= (\\ &nbsp&nbsp&nbsp  &nbsp/ _ \\/ __ \\/ ___/ / ___/`,
    `&nbsp/ ^ \\// &nbsp&nbsp&nbsp / &nbsp__/ /_/ (__  &nbsp) (__ &nbsp) `,
    `(|| ||) &nbsp&nbsp&nbsp&nbsp \\___/\\____/____/_/____/  &nbsp ${isMobile() ? "" : "v"+VERSION}`,
    `,""_""_ .  `,
    `<span id='accent'>Welcome to my terminal !</span> ${isMobile() ? "v"+VERSION : ""}`,
    "Contact : <a href='mailto:hey@eosis.space'>hey@eosis.space</a>",
    "---",
    "<span id='r'>Type '<span id='command'>help</span>' to get a list of all available commands.</span>",
    " ",
]

NOT_IMPLEMENTED_YET = [
    "Command not implemented yet."
]

zerator = [
    "    &nbsp &nbsp &nbsp @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@    ",
    "    &nbsp &nbsp @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      ",
    "    &nbsp @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@         ",
    "    &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp                  @@@@@@@@@@@@           ",
    "    &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp                @@@@@@@@@@@@             ",
    "    &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp              @@@@@@@@@@@@               ",
    "    &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp             @@@@@@@@@@@@                 ",
    "    &nbsp &nbsp &nbsp &nbsp &nbsp          @@@@@@@@@@@@                    ",
    "    &nbsp &nbsp &nbsp &nbsp         @@@@@@@@@@@@                      ",
    "    &nbsp &nbsp &nbsp     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
    "    &nbsp &nbsp    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   ",
    "    &nbsp @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       ",
    "    &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp                     @@@@@@@@@                 ",
    "    &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp                     @@@@@@@@@                 ",
    "    &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp                     @@@@@@@@@                 ",
    "    &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp                     @@@@@@@@@                 ",
    "    &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp                     @@@@@@@@@                 ",
    "    &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp                     @@@@@@@                   ",
    "    &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp                     @@@@@                     ",
    "    &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp                     @@@                       ",
    "    &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp                     @                        ",
]

repo = [
    "Opening site's repository...",
    "&link https://github.com/eosiswastaken/eosis.space"
]

blog = [
    "Blog posts :",
    " ",
    "<span id='underline'><a href='https://gist.io/@eosiswastaken/6a739ea48f855ee10f14b3128645ac3b' target='_blank'>making eosis.space</a></span>",
    " ",
    "<span id='underline'><a href='https://gist.io/@eosiswastaken/6a739ea48f855ee10f14b3128645ac3b' target='_blank'>empty blog post</a></span>"
]

weather = [
    "Opening weather.eosis.space (in progress)...",
    "&link https://weather.eosis.space"
]

tinyspace = [
    "Opening tinyspace.eosis.space...",
    "&link https://tinyspace.eosis.space"
]

whoami = [
    "visitor"
]

moons = [
    "<span id='moons'>Welcome to the exomoons catalogue.</span>",
    "<span id='moons'>Autopilot currently disabled. You cannot use the word ROUTE.</span>",
    "<span id='moons'>Scanners unavailable, INFO word has been disabled.</span>",
    "<span id='moons'>----------------------</span>",
    " ",
    "<span id='moons'>* The Company building  //  Buying at 30%</span>",
    " ",
    "<span id='moons'>* Experimentation</span>",
    "<span id='moons'>* Assurance (Rainy)</span>",
    "<span id='moons'>* Vow</span>",
    " ",
    "<span id='moons'>* Offense (Flooded)</span>",
    "<span id='moons'>* March (Flooded)</span>",
    " ",
    "<span id='moons'>* Rend (Eclipse)</span>",
    "<span id='moons'>* Dine (Eclipse)</span>",
    "<span id='moons'>* Titan (Foggy)</span>"
]

clear = [
    "&func clearConsole"
]

ehistory = [
    "&func displayHistory"
]

date = [
    "&func displayDate"
]

socials = [
    "<span id='highlight'><a href='https://discord.com/user/90482004435271680' target='_blank'>Discord</a></span> &nbsp&nbsp:&nbsp Contact me here, or by email (preferred)",
    " ",
    "<span id='highlight'><a href='https://github.com/eosiswastaken' target='_blank'>GitHub</a></span> &nbsp&nbsp:&nbsp Check out my latest projects and contributions",
    " ",
    "<span id='highlight'><a href='https://youtube.com/@eosiswastaken' target='_blank'>Youtube</a></span> &nbsp:&nbsp Random (but well-made) videos and essays",
    " ",
    "<span id='highlight'><a href='https://twitter.com/eosiswastaken' target='_blank'>Twitter</a></span> &nbsp&nbsp :&nbsp Not really active anymore on this account, but feel free to check out",
    " ",    
    "<span id='highlight'><a href='https://steamcommunity.com/id/eosiswastaken' target='_blank'>Steam</a></span> &nbsp&nbsp :&nbsp See the games I play, and my activity",
    " ",
    "<span id='highlight'><a href='https://twitch.com/eosis_' target='_blank'>Twitch</a></span> &nbsp&nbsp:&nbsp I stopped streaming but one day I'll stream myself progamming",
    " ",
    "<span id='highlight'><a href='https://ko-fi.com/eosiswastaken' target='_blank'>Ko-fi</a></span> &nbsp&nbsp :&nbsp If you ever have spare change......",
    " ",
    "Contact&nbsp&nbsp:&nbsp <a href='mailto:hey@eosis.space'>hey@eosis.space</a>",
]

projects = [
    "<span id='underline'><a href='https://github.com/eosiswastaken/pokedex' target='_blank'>pokedex</a></span> - simple pokedex made with React & Tailwind",
    " ",
    "<span id='underline'><a href='https://github.com/eosiswastaken/blog' target='_blank'>blog</a></span> - minimal blog with searching, themes and RSS feed made with Astro",
    " ",
    "<span id='underline'><a href='https://github.com/eosiswastaken/wyn' target='_blank'>wyn</a></span> - my first discord bot made with discord.py & sqlite",
    " ",
    "<span id='underline'><a href='https://github.com/eosiswastaken/eosis.space' target='_blank'>eosis.space</a></span> - this site, terminal portfolio",
    " ",
    "<span id='underline'><a href='https://github.com/eosiswastaken/weather' target='_blank'>weather</a></span> - weather app made with AlpineJS and HTMX",
    " ",
    "<span id='underline'><a href='https://github.com/eosiswastaken/chillzone' target='_blank'>chillzone</a></span> - lofi and productivity PWA : listen to lofi, use pomodoro timers, takes notes... made with React & Vite PWA",
    " ",
    "<span id='underline'><a href='https://github.com/eosiswastaken/me.eosis.space' target='_blank'>me</a></span> - simple business card component made with React",
    " ",
    "<span id='underline'><a href='https://github.com/eosiswastaken/goumeurs-de-mobs-III' target='_blank'>gdm3</a></span> - python turn-per-turn PvE battle game",
    " ",
    "<span id='underline'><a href='https://github.com/eosiswastaken/tinyspace' target='_blank'>tinyspace</a></span> - persistent browser game about space, exploration, management and survival made with React",
    " ",
    "<span id='underline'><a href='https://github.com/eosiswastaken/bufferNote' target='_blank'>bufferNote</a></span> - minimal note-taking bookmark URI tool",
    " ",
    "<span id='underline'><a href='https://github.com/eosiswastaken/instameme' target='_blank'>instameme</a></span> - social network website with working auth, posting, likes and commenting made with PHP"
]

function getSkillIcons(){
    if (window.innerWidth <= 618){
        return ["<img src='https://skillicons.dev/icons?i=js,html,css,py,discord,git,github,figma,linux,mysql,php&perline=5'/>","<img src='https://skillicons.dev/icons?i=docker,react,godot,vite&perline=5'/>","<img src='https://skillicons.dev/icons?i=electron,nodejs,ts,firebase,kotlin,rust,tailwind&perline=5'/>"]
    } else {
        return ["<img src='https://skillicons.dev/icons?i=js,html,css,py,discord,git,github,figma,linux,mysql,php'/>","<img src='https://skillicons.dev/icons?i=docker,react,godot,vite'/>","<img src='https://skillicons.dev/icons?i=electron,nodejs,ts,firebase,kotlin,rust,tailwind'/>"]
    }
}
skills = [
    "Skills I have :",
    " ",
    getSkillIcons()[0],
    " ",
    "Skills I'm learning : ",
    " ",
    getSkillIcons()[1],
    " ",
    "Skills I wish I had : ",
    " ",
    getSkillIcons()[2]
]

meow = [
    "<span id='meow'>meow 🥺</span>"
]

reload = [
    "&func reloadPage"
]

theme = [
    "themes available : ",
    " ",
    "light : canopy, stringtheory, oxygen, kyoto, onelight",
    "dark :  ayu, adrenaline, blocks, sugar, witchcraft, onedark",
    " ",
    "example : <span id='command'>theme oxygen</span>",
]

themeswitch = [
    "Theme switched !"
]




//----------//
// NEOFETCH //
//----------//


start = Date.now()



/**
 * JavaScript Client Detection
 * (C) viazenetti GmbH (Christian Ludwig)
 */
function jscd(window) {
    {
        var unknown = '-';

        // screen
        var screenSize = '';
        if (screen.width) {
            width = (screen.width) ? screen.width : '';
            height = (screen.height) ? screen.height : '';
            screenSize += '' + width + " x " + height;
        }

        // browser
        var nVer = navigator.appVersion;
        var nAgt = navigator.userAgent;
        var browser = navigator.appName;
        var version = '' + parseFloat(nVer);
        var nameOffset, verOffset, ix;

		// Yandex Browser
		if ((verOffset = nAgt.indexOf('YaBrowser')) != -1) {
			browser = 'Yandex';
			version = nAgt.substring(verOffset + 10);
		}
		// Samsung Browser
		else if ((verOffset = nAgt.indexOf('SamsungBrowser')) != -1) {
			browser = 'Samsung';
			version = nAgt.substring(verOffset + 15);
		}
		// UC Browser
		else if ((verOffset = nAgt.indexOf('UCBrowser')) != -1) {
			browser = 'UC Browser';
			version = nAgt.substring(verOffset + 10);
		}
        // Opera Next
        else if ((verOffset = nAgt.indexOf('OPR')) != -1) {
            browser = 'Opera';
            version = nAgt.substring(verOffset + 4);
        }
        // Opera
        else if ((verOffset = nAgt.indexOf('Opera')) != -1) {
            browser = 'Opera';
            version = nAgt.substring(verOffset + 6);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Legacy Edge
        else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
            browser = 'Microsoft Legacy Edge';
            version = nAgt.substring(verOffset + 5);
        } 
        // Edge (Chromium)
        else if ((verOffset = nAgt.indexOf('Edg')) != -1) {
            browser = 'Microsoft Edge';
            version = nAgt.substring(verOffset + 4);
        }
        // MSIE
        else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
            browser = 'Microsoft Internet Explorer';
            version = nAgt.substring(verOffset + 5);
        }
        // Chrome
        else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
            browser = 'Chrome';
            version = nAgt.substring(verOffset + 7);
        }
        // Safari
        else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
            browser = 'Safari';
            version = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Firefox
        else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
            browser = 'Firefox';
            version = nAgt.substring(verOffset + 8);
        }
        // MSIE 11+
        else if (nAgt.indexOf('Trident/') != -1) {
            browser = 'Microsoft Internet Explorer';
            version = nAgt.substring(nAgt.indexOf('rv:') + 3);
        }
        // Other browsers
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
            browser = nAgt.substring(nameOffset, verOffset);
            version = nAgt.substring(verOffset + 1);
            if (browser.toLowerCase() == browser.toUpperCase()) {
                browser = navigator.appName;
            }
        }
        // trim the version string
        if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

        majorVersion = parseInt('' + version, 10);
        if (isNaN(majorVersion)) {
            version = '' + parseFloat(nVer);
            majorVersion = parseInt(nVer, 10);
        }

        // mobile version
        var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

        // language
        var language = navigator.language

        // cookie
        var cookieEnabled = (navigator.cookieEnabled) ? true : false;

        if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
            document.cookie = 'testcookie';
            cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
        }

        // system
        var os = unknown;
        var clientStrings = [
            {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
            {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
            {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
            {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
            {s:'Windows Vista', r:/Windows NT 6.0/},
            {s:'Windows Server 2003', r:/Windows NT 5.2/},
            {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
            {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
            {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
            {s:'Windows 98', r:/(Windows 98|Win98)/},
            {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
            {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
            {s:'Windows CE', r:/Windows CE/},
            {s:'Windows 3.11', r:/Win16/},
            {s:'Android', r:/Android/},
            {s:'Open BSD', r:/OpenBSD/},
            {s:'Sun OS', r:/SunOS/},
            {s:'Chrome OS', r:/CrOS/},
            {s:'Linux', r:/(Linux|X11(?!.*CrOS))/},
            {s:'iOS', r:/(iPhone|iPad|iPod)/},
            {s:'Mac OS X', r:/Mac OS X/},
            {s:'Mac OS', r:/(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
            {s:'QNX', r:/QNX/},
            {s:'UNIX', r:/UNIX/},
            {s:'BeOS', r:/BeOS/},
            {s:'OS/2', r:/OS\/2/},
            {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
        ];
        for (var id in clientStrings) {
            var cs = clientStrings[id];
            if (cs.r.test(nAgt)) {
                os = cs.s;
                break;
            }
        }

        var osVersion = unknown;

        if (/Windows/.test(os)) {
            osVersion = /Windows (.*)/.exec(os)[1];
        	if (osVersion == 10 && navigator.userAgentData) {
                navigator.userAgentData.getHighEntropyValues(["platformVersion"])
                	.then((ua) => window.jscd.osVersion = (parseInt(ua.platformVersion.split('.')[0]) < 13 ? 10 : 11));
            }
            os = 'Windows';
        }

        switch (os) {
            case 'Mac OS':
            case 'Mac OS X':
            case 'Android':
                osVersion = /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([\.\_\d]+)/.exec(nAgt)[1];
                break;

            case 'iOS':
                osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                break;
        }
    }

    window.jscd = {
        screen: screenSize,
        browser: browser,
        browserVersion: version,
        browserMajorVersion: majorVersion,
        mobile: mobile,
        os: os,
        osVersion: osVersion,
        cookies: cookieEnabled,
        language:language
    };
}
jscd(this);

function isMobile() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };



  
  
neofetch = [
    '<pre>        <span id="nfred">,.=:!!t3Z3z.,</span>                  visitor@eosis.space</pre>',
    '<pre>       <span id="nfred">:tt:::tt333EE3</span>                  -------------------</pre>',
    '<pre>       <span id="nfred">Et:::ztt33EEEL</span> <span id="nfgreen">@Ee.,      ..,  </pre>',
    `<pre>      <span id="nfred">;tt:::tt333EE7</span> <span id="nfgreen">;EEEEEEttttt33#</span>   OS: ${jscd.os} ${jscd.osVersion}</pre>`,
    `<pre>     <span id="nfred">:Et:::zt333EEQ</span>. <span id="nfgreen">$EEEEEttttt33QL</span>   Browser: ${jscd.browser} ${jscd.browserMajorVersion}</pre>`,
    `<pre>     <span id="nfred">it::::tt333EEF</span> <span id="nfgreen">@EEEEEEttttt33F</span>    Uptime: none</pre>`,
    `<pre>    <span id="nfred">;3=*^\`\`\`"*4EEV</span> <span id="nfgreen">:EEEEEEttttt33@.</span>    Shell: eos v${VERSION}</pre>`,
    `<pre>    <span id="nfblue">,.=::::!t=.,</span> <span id="nfred">\`</span> <span id="nfgreen">@EEEEEEtttz33Q</span>      Mobile: ${isMobile()}</pre>`,
    `<pre>   <span id="nfblue">;::::::::zt33)</span>   <span id="nfgreen">"4EEEtttji3P*</span>      Screen: ${jscd.screen}</pre>`,
    `<pre>  <span id="nfblue">:t::::::::tt33.</span><span id="nfyellow">:Z3z..  \`\` ,..g.</span>      Language: ${jscd.language}</pre>`,
    '<pre>  <span id="nfblue">i::::::::zt33F</span> <span id="nfyellow">AEEEtttt::::ztF</span></pre>',
    '<pre> <span id="nfblue">;:::::::::t33V</span> <span id="nfyellow">;EEEttttt::::t3</span>        <span id="nfgray">eosis.space</span></pre>',
    '<pre> <span id="nfblue">E::::::::zt33L</span> <span id="nfyellow">@EEEtttt::::z3F</span></pre>',
    '<pre><span id="nfblue">{3=*^```"*4E3)</span> <span id="nfyellow">;EEEtttt:::::tZ`</span></pre>',
    '<pre>             <span id="nfblue">`</span> <span id="nfyellow">:EEEEtttt::::z7</span></pre>',
    '<pre>                 <span id="nfyellow">"VEzjt:;;z>*`</span></pre>'
];