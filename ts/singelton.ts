export class StatsTracker {
  buttonClicked: number = 0
  facebookShares: number = 0
  twitterShares: number = 0
  widgetViews: number = 0

  constructor() {
    if (StatsTracker._instance) {
      throw new Error('Cannot initialize singelton class using new')
    }
    StatsTracker._instance = this
  }

  private static _instance: StatsTracker = new StatsTracker()

  public static get instance(): StatsTracker {
    return StatsTracker._instance
  }
}

const tracker = StatsTracker.instance

tracker.buttonClicked = 90
tracker.facebookShares = 20
tracker.twitterShares = 30
tracker.widgetViews = 10

console.log(' LOG ___ buttonClicked ', tracker.buttonClicked)
console.log(' LOG ___ facebookShares ', tracker.facebookShares)
console.log(' LOG ___ twitterShares ', tracker.twitterShares)
console.log(' LOG ___ widgetViews ', tracker.widgetViews)

tracker.twitterShares++
tracker.widgetViews++

const anotherTracker = StatsTracker.instance

console.log(' LOG ___ buttonClicked ', anotherTracker.buttonClicked)
console.log(' LOG ___ facebookShares ', anotherTracker.facebookShares)
console.log(' LOG ___ twitterShares ', anotherTracker.twitterShares)
console.log(' LOG ___ widgetViews ', anotherTracker.widgetViews)