# test-canvas.py
import pytest

@pytest.fixture(scope="session")
def browser_context_args(browser_context_args):
    return {
        **browser_context_args,
        "ignore_https_errors": True,
        "base_url": "https://localhost"
    }

def test_canvas(page):
    page.goto("/dashboard/auth/login")
    page.wait_for_timeout(2000)

    page.click("input[type=\"text\"]")
    page.type("input[type=\"text\"]", "admin", delay=100)
    page.press("input[type=\"text\"]", "Tab")
    page.type("input[type=\"password\"]", "password", delay=100)
    with page.expect_navigation():
        page.click("button:has-text(\"Log in with Local User\")")
    page.wait_for_timeout(2000)

    page.click("text=local")
    page.click(".icon.icon-terminal.icon-lg")
    page.focus("text=Connected")
    page.wait_for_timeout(2000)

    page.type(":nth-match(canvas, 4)", "kubectl get pods -A", delay=100)
    page.press(":nth-match(canvas, 4)", "Enter")
    page.wait_for_timeout(2000)
