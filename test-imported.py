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

    page.hover("text=Import Existing")
    page.wait_for_timeout(3000)
    page.click("text=Import Existing")

    page.hover("text=Amazon EKS")
    page.wait_for_timeout(3000)
    page.click("text=Amazon EKS")

    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").click("[placeholder=\"e\\.g\\.\\ sandbox\"]")

    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").type("[placeholder=\"e\\.g\\.\\ sandbox\"]", "example")

    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").click("i[role=\"button\"]:has-text(\"Open accordion\")")

    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").click("[placeholder=\"e\\.g\\.\\ production-credentials\"]")

    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").type("[placeholder=\"e\\.g\\.\\ production-credentials\"]", "example")

    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").click("[placeholder=\"Your\\ AWS\\ access\\ key\"]")

    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").type("[placeholder=\"Your\\ AWS\\ access\\ key\"]", "example")

    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").press("[placeholder=\"Your\\ AWS\\ access\\ key\"]", "Tab")

    page.wait_for_timeout(3000)
    page.frame(name="ember-iframe").type("[placeholder=\"Your\\ AWS\\ secret\\ key\"]", "example")

    page.wait_for_timeout(3000)
    page.goto("https://localhost/dashboard/c/local/manager/provisioning.cattle.io.cluster")
    page.wait_for_timeout(3000)

    page.hover("text=Import Existing")
    page.wait_for_timeout(3000)
    page.click("text=Import Existing")

    with page.expect_navigation():
        page.hover("text=Generic")
        page.wait_for_timeout(3000)
        page.click("text=Generic")

    page.click("[placeholder=\"A\\ unique\\ name\\ for\\ the\\ cluster\"]")
    page.type("[placeholder=\"A\\ unique\\ name\\ for\\ the\\ cluster\"]", "example")
    page.wait_for_timeout(3000)

    page.wait_for_timeout(3000)
    page.click("text=Add")

    page.hover("[aria-label=\"Owner\"]")
    page.wait_for_timeout(3000)
    page.click("[aria-label=\"Owner\"]")

    page.hover("[aria-label=\"Member\"]")
    page.wait_for_timeout(3000)
    page.click("[aria-label=\"Member\"]")

    page.hover("[aria-label=\"Custom\"]")
    page.wait_for_timeout(3000)
    page.click("[aria-label=\"Custom\"]")

    page.hover("div[role=\"dialog\"] >> text=Cancel")
    page.wait_for_timeout(3000)
    page.click("div[role=\"dialog\"] >> text=Cancel")

    with page.expect_navigation():
        page.click("button:has-text(\"Create\")")

    page.hover("text=/kubectl apply -f .*/i")
    page.wait_for_timeout(3000)
    page.click("text=/kubectl apply -f .*/i")

    page.hover("text=/curl --insecure .*/i")
    page.wait_for_timeout(3000)
    page.click("text=/curl --insecure .*/i")

    page.hover("text=Clusters")
    page.click("text=Clusters")

    with page.expect_navigation():
        page.hover("text=example")
        page.click("text=example")
