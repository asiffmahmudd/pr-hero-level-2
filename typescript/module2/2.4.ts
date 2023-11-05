{
    // interface -> generic

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T;
        bike?: X;
    }

    type XiomiWatch = {
        brand: string;
        model: string;
        display: string;
    }

    const poorDeveloper: Developer<XiomiWatch> = {
        name: 'Persian',
        computer: {
            brand: 'ASUS',
            model: 'X-255UR',
            releaseYear: 2023,
        },
        smartWatch: {
            brand: 'Xiomi',
            model: 'KM',
            display: 'OLED'
        }
    }

    interface AppleWatch {
        brand: string;
        model: string;
        sleepTrack: boolean;
        heartTrack: boolean;
    }

    interface YamahaBike {
        model: string;
        engineCapacity: string;
    }

    const richDeveloper: Developer<AppleWatch, YamahaBike> = {
        name: 'Persian',
        computer: {
            brand: 'Apple',
            model: 'Pro',
            releaseYear: 2023,
        },
        smartWatch: {
            brand: 'Apple',
            model: 'SE',
            sleepTrack: true,
            heartTrack: true
        },
        bike: {
            model: 'Yamaha',
            engineCapacity: '100cc'
        }
    }
}