
import Links from '../components/Link'
import Heading from '../components/Heading'
import PrismicDOM from 'prismic-dom'
import Paragraph from '../components/Paragraph'

var linkResolver = function (doc) {
    // Pretty URLs for known types
    if (doc.type === 'blog') return "/post/" + doc.uid;
    if (doc.type === 'page') return "/" + doc.uid;
    // Fallback for other types, in case new custom types get created
    return "/doc/" + doc.id;
};

var Elements = PrismicDOM.RichText.Elements;

const HtmlSerializer = function (type, element, content, children) {
    switch (type) {
        case Elements.heading1: return <Heading type="h1" children={children.join('')} key={element['text']} />;
        case Elements.heading2: return <Heading type="h2" children={children.join('')} key={element['text']} />;
        case Elements.heading3: return `< h3 > ${children.join('')}</h3 > `;
        case Elements.heading4: return `< h4 > ${children.join('')}</h4 > `;
        case Elements.heading5: return `< h5 > ${children.join('')}</h5 > `;
        case Elements.heading6: return `< h6 > ${children.join('')}</h6 > `;
        case Elements.paragraph: return <Paragraph children={[element]} key={element['text']} />;
        case Elements.preformatted: return `< pre > ${children.join('')}</pre > `;
        case Elements.strong: return `< strong > ${children.join('')}</strong > `;
        case Elements.em: return `< em > ${children.join('')}</em > `;
        case Elements.listItem: return `< li > ${children.join('')}</li > `;
        case Elements.oListItem: return `< li > ${children.join('')}</li > `;
        case Elements.list: return `< ul > ${children.join('')}</ul > `;
        case Elements.oList: return `< ol > ${children.join('')}</ol > `;

        case Elements.embed:
            return (`
                < div data - oembed="${element.oembed.embed_url}"
            data - oembed - type="${element.oembed.type}"
            data - oembed - provider="${element.oembed.provider_name}"
                >
                ${element.oembed.html}
        </div >
    `);
        case Elements.hyperlink:
            var target = element.data.target ? `target = "${element.data.target}" rel = "noopener"` : '';
            var linkUrl = PrismicDOM.Link.url(element.data, linkResolver);
            return <Links url={linkUrl} children={children.join('')} key={element['data']['url']} />
        case Elements.label:
            var label = element.data.label ? ` class="${element.data.label}"` : '';
            return `< span ${label}> ${children.join('')}</span > `;
        case Elements.span: return content ? content.replace(/\n/g, "<br />") : '';
        default: return null;
    }
};

export default HtmlSerializer