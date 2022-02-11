# Run `kubectl get pods -A` on local
def test_canvas(page):
    page.goto("/dashboard/auth/login")
    page.wait_for_timeout(1000)

    page.click("input[type=\"text\"]")
    page.type("input[type=\"text\"]", "admin")
    page.press("input[type=\"text\"]", "Tab")
    page.type("input[type=\"password\"]", "admin")
    with page.expect_navigation():
        page.click("button:has-text(\"Log in with Local User\")")
    page.wait_for_timeout(1000)

    page.locator("a:has-text(\"local\")")
    page.wait_for_timeout(1000)

    page.click("a:has-text(\"local\")")
    page.wait_for_timeout(1000)

    page.locator(".icon.icon-terminal.icon-lg").hover()
    page.wait_for_timeout(1000)

    page.click(".icon.icon-terminal.icon-lg")
    page.focus("text=Connected")
    page.wait_for_timeout(1000)

    page.type(":nth-match(canvas, 4)", "kubectl get pods -A")
    page.press(":nth-match(canvas, 4)", "Enter")
    page.wait_for_timeout(2000)
