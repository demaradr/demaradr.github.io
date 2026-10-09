# TODO

## Set up hello@adrianodemartin.com with ImprovMX

The site currently uses adriano.demartinez@gmail.com because the domain has no mail (MX) records, so anything sent to an @adrianodemartin.com address bounces. ImprovMX's free plan forwards a domain address to Gmail.

- [ ] Sign up at https://improvmx.com and add the domain `adrianodemartin.com`
- [ ] Create an alias: `hello` → `adriano.demartinez@gmail.com`
- [ ] In AWS Route 53 (Hosted zones → adrianodemartin.com), add the records ImprovMX shows. At the time of writing they were:
  - MX record, name blank (the root domain), value:
    ```
    10 mx1.improvmx.com
    20 mx2.improvmx.com
    ```
  - TXT record (SPF), name blank: `"v=spf1 include:spf.improvmx.com ~all"`
- [ ] Wait for ImprovMX's dashboard to show the domain as verified (usually minutes, can take up to an hour)
- [ ] Send a test email to hello@adrianodemartin.com from a different account and confirm it reaches Gmail
- [ ] Switch the site over: set `email` in `src/siteConfig.js` to `hello@adrianodemartin.com`, then commit and push
- [ ] Optional: to reply *as* hello@adrianodemartin.com from Gmail, use Gmail's "Send mail as" with ImprovMX's SMTP credentials (a paid ImprovMX feature)
