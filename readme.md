*ASSIGMENT REQUIREMENT
**1.ONBOARDING:
- 3 page on boarding when launch app with next and skip button (can also swipe)
**2.NAVIGATION:
- MainScreen: can switch between Home, Activity, Account by tabbed design
- Can move forward <> back between booking screen
**3.BACKEND SERVER INTERGRATION
- Everytime Activity tab is tabbed, call GET to get activylist
https://zjil8ive37.execute-api.ca-central-1.amazonaws.com/dev/get-activity
- In Map Screen, when tab confirm button, call POST to get technician info and rate (show in Matching screen)
https://zjil8ive37.execute-api.ca-central-1.amazonaws.com/dev/cm-post-matching
- In Payment Screen, when tab process button, call POST to process payment and get full info of technician (show in final confirmation screen)
https://zjil8ive37.execute-api.ca-central-1.amazonaws.com/dev/cm-post-payment
**4.APP ICON
- In asset/logo folder with all sizes for android and iOS
