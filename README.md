# Water Table

This is a Vite / React / Typescript app that displays water sensor data

**How to run**

- Run `npm i`
- Run `npm run dev`
- Go to `http://localhost:3001/`

You will also need to:

- Create an `.env.local`
- Ask for the `VITE_MAPBOX_TOKEN` and add that to the `.env.local`

**Improvements**

Listed below are some improvements I would make to the app if I were to spend more time on it:

- Better mobile design: This could be achieved by showing the map still, perhaps in a popup
- Responsive on resize: Currently there is no resize listener, it's only responsive on refresh
- Clear search button
- Search by other parameters, not just ID
- Change desc/asc order of the table by clicking on table headers
- Use React Query so that data doesn't have to load multiple times (even though this is currently just simulated)
- Add tests
