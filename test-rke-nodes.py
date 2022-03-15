def test_canvas(page):
    page.goto("/dashboard/auth/login")
    page.wait_for_timeout(3000)

    page.click("input[type=\"text\"]")
    page.type("input[type=\"text\"]", "admin")
    page.press("input[type=\"text\"]", "Tab")
    page.type("input[type=\"password\"]", "twelvecharacters")
    with page.expect_navigation():
        page.click("button:has-text(\"Log in with Local User\")")
    page.wait_for_timeout(3000)
    page.click("svg")

    page.hover("text=Cluster Management")
    page.wait_for_timeout(3000)
    page.click("text=Cluster Management")

    page.hover("text=Create")
    page.wait_for_timeout(3000)
    page.click("text=Create")

    page.locator("button:has-text(\"Cancel\")").scroll_into_view_if_needed()
    page.wait_for_timeout(3000)

    page.hover("text=Harvester")
    page.wait_for_timeout(3000)
    page.click("text=Harvester")

    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").click("[placeholder=\"e\\.g\\.\\ sandbox\"]")

    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").type("[placeholder=\"e\\.g\\.\\ sandbox\"]", "example")

    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").click("text=Add Node Template minutes Taints >> input[type=\"text\"]")

    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").type("text=Add Node Template minutes Taints >> input[type=\"text\"]", "node-prefix")

    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").check("#ember37")
    page.frame(name="ember-iframe").check("#ember38")

    page.frame(name="ember-iframe").hover("text=Add Node Template")
    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").click("text=Add Node Template")

    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").click("[placeholder=\"e\\.g\\.\\ production-credentials\"]")

    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").type("[placeholder=\"e\\.g\\.\\ production-credentials\"]", "credentials")

    page.frame(name="ember-iframe").hover("[placeholder=\"e\\.g\\.\\ ubuntu\"]")
    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").click("[placeholder=\"e\\.g\\.\\ ubuntu\"]")

    page.frame(name="ember-iframe").hover("#ember130 >> text=Cancel")
    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").click("#ember130 >> text=Cancel")

    page.frame(name="ember-iframe").hover("button:has-text(\"Add Node Pool\")")
    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").click("button:has-text(\"Add Node Pool\")")

    page.frame(name="ember-iframe").hover("text=Cloud Provider None Harvester (Out-of-tree) External (Out-of-tree)")
    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").click("text=Cloud Provider None Harvester (Out-of-tree) External (Out-of-tree)")

    page.frame(name="ember-iframe").hover("text=Cancel")
    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").click("text=Cancel")
