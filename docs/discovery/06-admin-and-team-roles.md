# Phase 0 Discovery: Section F - Admin and Team Roles

## Current Phase

Phase 0: Discovery and Alignment.

## Summary of Your Answers

Soglia will launch with a very small team:

- Founder.
- Florist.

At launch, you will handle most business areas. The florist will focus on florist work, POS, order preparation, and some inventory tasks.

The system should still be designed for future team expansion, with staff only seeing what they need for their area.

## Executive / Founder Dashboard

The founder dashboard should show the best and most important business information first, then the problems.

Priority dashboard items:

- Today's sales.
- Pending orders.
- Best products.
- Marketing performance.
- Subscription status.

Problem and alert items should still be visible, but they should not dominate the first screen unless urgent.

## Sales and POS

Allowed for founder only:

- Apply discounts.
- Refund orders.
- Close the day.

The florist may be allowed to close the day later, but not at launch.

Allowed for founder and florist:

- Create orders.
- Manage POS orders.
- Handle pickup and walk-in workflows.
- Edit order details where appropriate.

Customer profile editing:

- Customers should be able to edit their own details.
- Birthday day and month should not be editable by the customer after being set.

## Marketing and Growth

Marketing and growth should be founder-only at launch.

Founder controls:

- Campaigns.
- Coupon codes.
- Landing pages.
- Influencer codes.
- Ad reporting.
- Marketing analytics.

Future marketing roles can be added later, but they should not be active in the launch team.

## Operations and Fulfillment

Founder and florist can move orders through fulfillment statuses.

This includes statuses such as:

- Confirmed.
- Florist designing.
- Quality check.
- Ready for pickup.
- Out for delivery.
- Delivered.
- Completed.

## Inventory and Procurement

Founder and florist can handle most inventory tasks.

Allowed for founder and florist:

- Edit stock.
- Record spoilage.
- Record damaged inventory.
- Update actual components used.
- Approve or enter substitutions.
- Manage inventory usage during bouquet preparation.

Founder-only:

- Receive stock.
- Final control over procurement-sensitive actions.

## Finance and Accounting

Finance access should be tightly restricted.

Founder can see:

- Revenue.
- Refunds.
- Discounts.
- Cost of goods sold.
- Margins.
- Taxes.
- Expenses.
- Export reports.
- Accounting reports.

Florist can see only product cost information needed inside the working system, similar to what customers see on the website where appropriate.

Florist should not see:

- Margin.
- Profit.
- Finance reports.
- Accounting exports.
- Sensitive business performance data.

## Customer Service / CRM

Founder-only:

- Customer profiles.
- Order history.
- Customer notes.
- Complaints.
- Preferences.
- Birthdays and anniversaries.
- CRM insights.

Founder and staff can handle:

- WhatsApp inquiries.
- Social inquiries.

## Content and Brand Management

Content and brand management should be founder-only at launch.

Founder controls:

- Homepage banners.
- Product copy.
- Arabic and English descriptions.
- SEO fields.
- Journal posts.
- Campaign pages.
- Images.

## Data and Analytics

Staff should only see reports for their area.

Founder can see all dashboards and reports.

Florist can see operational reports that help with preparation, POS, and inventory work, but not full finance, margin, CRM, or marketing performance unless later approved.

## System Administration and Permissions

System administration should be founder-only.

Founder controls:

- Inviting staff.
- Assigning roles.
- Changing permissions.
- Store settings.
- Delivery zones.
- Payment settings.
- Integrations.
- System configuration.

## Recommended Default

Launch roles:

- Founder / Super Admin.
- Florist / POS Staff.

Planned future roles:

- Store Manager.
- POS Staff.
- Delivery Staff.
- Marketing Manager.
- Accountant.
- Customer Support.
- Content Manager.
- Inventory Manager.
- Analyst.

The MVP should use a permission-ready structure, but the first interface should stay simple. The founder role has full access. The florist role gets only the workflows needed to do florist, POS, and inventory-preparation work.

## Risks and Tradeoffs

If the florist role is too restricted, daily operations will become slow and everything will depend on the founder.

If the florist role sees too much finance or CRM data, privacy and business sensitivity become problems.

Customer birthdays need special handling because you want birthday day and month to become locked after entry. This affects customer profile permissions.

The founder dashboard must balance good news and problem alerts. If it only shows problems, it will feel stressful. If it hides problems, it will fail as an operating dashboard.

## Open Questions

- Whether florist discount permissions should be added later with limits.
- Whether customer birthday edits require staff approval.
- Whether WhatsApp and social inquiries should be visible to future customer support staff.
- Whether the accountant role should be read-only only, or allowed to export reports.
- Whether role permissions should be editable in the UI at launch or configured by default first.
