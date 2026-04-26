import { NextRequest, NextResponse } from 'next/server';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwJ-GIUCcn2wXBQ8KJKaIhUgbSdf0zqWqPyO_eY0u4iskfBAZD0uezqHSGl1YRfxc8_HA/exec';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Forward to Apps Script from server (no CORS issues server-side)
    const res = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(body),
      redirect: 'follow',
    });

    const text = await res.text();
    let data;
    try { data = JSON.parse(text); } catch { data = { raw: text }; }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('Sheets API error:', msg);
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
