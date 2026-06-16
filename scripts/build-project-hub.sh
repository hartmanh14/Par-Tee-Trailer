#!/usr/bin/env bash
set -euo pipefail

publish_dir="render_build/project_hub"

rm -rf "$publish_dir"
mkdir -p "$publish_dir"

cp -R project_hub/. "$publish_dir/"

for file in \
  README.md \
  PROJECT_STATUS.md \
  LLM_HANDOFF_CONTEXT.md \
  SEND_TO_WIFE_PREVIEW_LINK.txt \
  01_plan_summary.md \
  02_90_day_execution_tracker.md \
  03_local_market_validation_worksheet.md \
  04_lean_budget_break_even_model.xlsx \
  05_vendor_shortlist_and_outreach.md \
  06_brand_brief_and_names.md \
  07_booking_website_and_marketplace_listings.md \
  08_ohio_legal_insurance_licensing_checklist.md \
  09_gap_analysis_and_solutions.md \
  10_market_desire_validation_guide.md \
  Triple_Play_Mobile_Golf_Website.zip \
  Triple_Play_shareable_photos.zip
do
  if [ -e "$file" ]; then
    cp "$file" "$publish_dir/"
  fi
done

cp -R draft_website "$publish_dir/draft_website"
cp -R shareable_photos "$publish_dir/shareable_photos"

# The local hub lives in /project_hub and links to ../ files.
# The Render build publishes the hub as site root, so links become ./ files.
sed -i 's#href="../#href="./#g' "$publish_dir/index.html"
sed -i 's#url("../draft_website/#url("./draft_website/#g' "$publish_dir/styles.css"
