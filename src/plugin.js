
/* exported Script */

const RB_LOGO = "data:image/png;base64,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";

const getMentionRepr = (title) => '@' + title;

const getActionFromEvent = (e) => e.event.split('_').pop();

const getReviewRequestDetails = (data) => {
    return {
        title: data.summary,
        user: data.links.submitter.title,
        repo: data.links.repository.title,
        branch: data.branch,
        people: data.target_people.map(t => getMentionRepr(t.title)).join(', '),
        bugs: data.bugs_closed.join(', '),
        url: data.absolute_url,
    };
}

const handleReviewRequest = (data, addReviewers) => {
    const rr = getReviewRequestDetails(data.review_request);
    const msg = [
        `Review request ${getActionFromEvent(data)} by ${rr.user}: ${rr.title}`,
        `Repository: ${rr.repo}#${rr.branch}`,
        `Bugs: ${rr.bugs}`,
        `Link: ${rr.url}`,
    ];

    if (addReviewers) {
        msg.push(`Reviewers: ${rr.people}`);
    }

    return {
        content: {
            text: msg.join('\n'),
            icon_url: RB_LOGO,
        },
    };
}

const events = {
    review_request_published(data) {
        return handleReviewRequest(data, true);
    },

    review_request_reopened(data) {
        return handleReviewRequest(data, true);
    },

    review_request_closed(data) {
        return handleReviewRequest(data, false);
    },
}

class Script {
    process_incoming_request({ request }) {
        try {
            const event = request.content.event;
            if (events[event]) {
                return events[event](request.content);
            }
        } catch (e) {
            console.log('rberror error', e);
            return {
                error: {
                    success: false,
                    message: e.message || e
                }
            };
        }
    }
}