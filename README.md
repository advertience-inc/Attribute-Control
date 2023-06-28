# Advertience Attribution Linker Tag

Advertience Attribution Linker provides simple integration with the Advertience Attribution Solution.

Control attribution to reflect the right channels to accurately measure success.

## Setup

This tag will add three variables to the dataLayer: `source`, `medium`, and `campaign`. It will fire the `adv_pageview` event when finished. These variables will be used to control attribution. Here is how to configure your GTM container to make the most of this tag.

### 1. Add the Advertience Attribution Linker tag

- Navigate to `Tags`
- Create a new tag
- Choose `Advertience Attribution Linker` configuration from the Community Template Gallery
- In `Client Tab`, write your Advertience Attribution client tab name
- To use the attribution on all pages, it is recommended you use the `All Pages` trigger. Otherwise create a new trigger that fires on page view of the pages you want them to
- Save the tag

![Example Attribution Tag](./images/AttributionTag.png)

### 2. Make your three dataLayer variables

You will need to create a variable for each of `source`, `medium`, and `campaign`.

- Navigate to `Variables`
- Create new variable, named with `source`, `medium`, or `campaign`
- Choose `Data Layer Variable` configuration
- In `Data Layer Variable Name`, write the appropriate choice of `source`, `medium`, or `campaign`
- Save the variable and repeat until all three variables are created

![Example Attribution Tag](./images/sourceVariable.png)

### 3. Create `adv_pageview` custom event

- Navigate to `Triggers`
- Create new trigger, named `adv_pageview` to avoid confusion
- Choose `Custom Event` configuration
- In `Event name`, write `adv_pageview`
- Save the trigger

![Example adv_pageview event](./images/adv_pageview.png)

### 4. Edit your GA4 Configuration tag

- Navigate to `Tags`
- Click on your `Google Analytics: GA4 Configuration` tag
- Open the `Fields to Set` section
- Click the `Add Row` button three times to make space for the three new parameters
- Enter in the `Field Name` rows: `campaign_source`, `campaign_medium`, and `campaign_name`
- For the `Value` rows, click the `+` button and find your appropriate variable from step 2, click on it
- Add the `adv_pageview` trigger from step 3 to the tag
- Save the tag

![Example GA4 Tag](./images/GA4Tag.png)

After these steps have been taken, the tag should be working correctly, and the GA4 configuration tag will fire with the proper fields being set with the proper values.

It is recommended you test the setup in preview mode to ensure it is working as expected.